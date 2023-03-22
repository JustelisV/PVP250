import React, { Component } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Geolocation from 'ol/Geolocation';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [0, 0],
      zoom: 2,
    };
    this.geolocation = new Geolocation({
      trackingOptions: {
        enableHighAccuracy: true,
      },
      projection: new View({
        center: this.state.center,
        zoom: this.state.zoom,
      }).getProjection(),
    });
    this.geolocation.on('change', () => {
      this.setState({
        center: this.geolocation.getPosition(),
        zoom: 18,
      });
    });
    this.geolocation.on('error', () => {
      alert('Geolocation error');
    });
    this.vectorSource = new VectorSource({
      features: [new Feature({
        geometry: new Point(fromLonLat(this.state.center)),
      })],
    });
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
      style: new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({
            color: '#3399CC',
          }),
          stroke: new Stroke({
            color: '#fff',
            width: 2,
          }),
        }),
      }),
    });
  }

  componentDidMount() {
    const map = new Map({
      target: this.mapRef,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        this.vectorLayer,
      ],
      view: new View({
        center: this.state.center,
        zoom: this.state.zoom,
      }),
    });
    map.addLayer(this.vectorLayer);
    this.geolocation.setTracking(true);
  }

  render() {
    return (
      <div>
        <div ref={(node) => { this.mapRef = node; }} style={{ width: '100%', height: '100vh' }} />
      </div>
    );
  }
}

export default App;