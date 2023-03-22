import React, { useRef, useState, useEffect } from "react"
import "./Map.css";
import MapContext from "./MapContext";
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import geolocated from 'react-geolocated';
import * as ol from "ol";
import {easeOut} from 'ol/easing';
import {easeIn} from 'ol/easing';
import Geolocation from 'ol/Geolocation';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Map = ({ children, zoom, center }) => {
	const mapRef = useRef();
	const [map, setMap] = useState(null);

	// on component mount
	useEffect(() => {
		let options = {
			view: new ol.View({ zoom, center }),
			layers: [],
			controls: [],
			overlays: []
		};

		let mapObject = new ol.Map(options);
		mapObject.setTarget(mapRef.current);
		setMap(mapObject);

		return () => mapObject.setTarget(undefined);
	}, []);

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

	
	return (
	    <div className="container">
		    <div ref={mapRef} className="ol-map" />
		    <div className="zoom-buttons">
		        <button onClick={handleZoomIn}>+</button>
		        <button onClick={handleZoomOut}>-</button>
		    </div>
		    <MapContext.Provider value={{ map }}>
			    {children}
		    </MapContext.Provider>
	    </div>)
};
export default Map;