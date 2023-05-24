import React, { useRef, useState, useEffect } from "react"
import "./Map.css";
import MapContext from "./MapContext";
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Vector as VectorSource } from 'ol/source';
import geolocated from 'react-geolocated';
import * as ol from "ol";
import {easeOut} from 'ol/easing';
import {easeIn} from 'ol/easing';
import Geolocation from 'ol/Geolocation';
import {Circle as CircleStyle, Fill, Stroke, Style, Icon} from 'ol/style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Overlay from 'ol/Overlay.js';
import {toLonLat} from 'ol/proj.js';
import {toStringHDMS} from 'ol/coordinate.js';
import * as bootstrap from 'bootstrap';


const Map = ({ children, zoom, center }) => {
	const mapRef = useRef();
	const [map, setMap] = useState(null);
    const overlay = new Overlay({
        autoPan: {
          animation: {
            duration: 250,
          },
        },
      });



	// on component mount
	useEffect(() => {
		let options = {
			view: new ol.View({ zoom, center }),
			layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
			controls: [],
			overlays: [],
      moveTolerance: 5
		};

		let mapObject = new ol.Map(options);
		mapObject.setTarget(mapRef.current);
		setMap(mapObject);

        
		return () => mapObject.setTarget(undefined);
        
	}, []);




  // //map.addLayer(vectorLayer);
  // map.on('click', function(event) {
  //   if (window.confirm('Do you want to add a pin here?')) {
  //     const feature = new ol.Feature({
  //       geometry: new Point(event.coordinate)
  //     });
  //     vectorSource.addFeature(feature);
  //   }
  // });
   
      // geolocation change handler
	useEffect(() => {
        if (!map || !navigator.geolocation) return;
        
        const geolocation = new ol.Geolocation({
			tracking: true,
            trackingOptions: {
                enableHighAccuracy: true,
            },
            projection: map.getView().getProjection(),
        });
		console.log(geolocation.getPosition());

        const markerSource = new VectorSource();

        const markerLayer = new VectorLayer({
            source: markerSource,
        });

        map.addLayer(markerLayer);

        geolocation.on('change:position', () => {
            const position = geolocation.getPosition();
            const markerFeature = new Feature({
                geometry: new Point(position),
            });
            const markerStyle = new Style({
				image: new CircleStyle({
					radius: 6,
					fill: new Fill({ color: '#3399CC' }),
					stroke: new Stroke({ color: '#fff', width: 2 }),
				  }),
            });
            markerFeature.setStyle(markerStyle);
            markerSource.clear();
            markerSource.addFeature(markerFeature);
        });
		return () => {
            map.removeLayer(markerLayer);
        };
     
    }, [map]);

    // zoom buttons handler
    const handleZoomIn = () => {
        if (!map) return;
        
        let view = map.getView();
        let currentZoom = view.getZoom();
        
        view.animate({
          zoom: currentZoom + 1,
          duration: 250,
          easing: easeOut
       });
    };


    const handleZoomOut = () => {
      if (!map) return;
      
      let view = map.getView();
      let currentZoom = view.getZoom();

      view.animate({
          zoom: currentZoom - 1,
          duration: 250,
          easing: easeIn
       });
    };
    const addPin = (coordinate) => {
      const pinStyle = new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'src/assets/pin.png',
        }),
      });
      const pinFeature = new Feature({
        geometry: new Point(coordinate),
      });
      pinFeature.setStyle(pinStyle);
      const vectorSource = new VectorSource({
        features: [pinFeature],
      });
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });
      map.addLayer(vectorLayer);
    };
    useEffect(() => {
      if (!map) return;

     
     
      window.onload = function(){
        const container = document.getElementById('popup');
        const content = document.getElementById('popup-content');
        const closer = document.getElementById('popup-closer');
        const adder = document.getElementById('popup-adder');
        /**
 * Create an overlay to anchor the popup to the map.
 */
const overlay = new Overlay({
    element: container,
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });
  
  /**
   * Add a click handler to hide the popup.
   * @return {boolean} Don't follow the href.
   */

  const element = document.getElementById('popup');
  window.bootstrap = require("bootstrap");

  const popup = new Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false,
  });
  map.addOverlay(popup);
  
  let popover;
  function disposePopover() {
    if (popover) {
      popover.dispose();
      popover = undefined;
    }
  }
  // change mouse cursor when over marker
map.on('pointermove', function (e) {
  const pixel = map.getEventPixel(e.originalEvent);
  const hit = map.hasFeatureAtPixel(pixel);
  map.getTarget().style.cursor = hit ? 'pointer' : '';
});
// Close the popup when the map is moved
  map.on('movestart', disposePopover);
  // display popup on click
  map.on('click', function (evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      return feature;
    });
    disposePopover();
    if (!feature) {
      return;
    }
    popup.setPosition(evt.coordinate);
    popover = new bootstrap.Popover(element, {
      placement: 'auto',
      html: false,
      title: "hello",
      content:"hello hello"
    });
    popover.show();
  });


    closer.onclick = function () {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
  };

  
        map.on('click', function (evt) {
            const coordinate = evt.coordinate;
            const hdms = toStringHDMS(toLonLat(coordinate));     
            adder.onclick = function () {
              addPin(coordinate);

              return false;
            };
            content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
            overlay.setPosition(coordinate);
            map.addOverlay(overlay);
          });

  }


  return () => {
          map.removeLayer(overlay);
      };
   
  }, [map]);



	return (
	    <div className="container">
		    <div ref={mapRef} className="ol-map" />
		    <div className="zoom-buttons">
		        <button onClick={handleZoomIn}>+</button>
		        <button onClick={handleZoomOut}>-</button>
		    </div>
        <div id="popup" className="custom-popover"></div>
       
		    <MapContext.Provider value={{ map }}>
			    {children}
		    </MapContext.Provider>
	    </div>)
};
export default Map;