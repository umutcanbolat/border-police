import React, { useState } from 'react';
import MapGL, { Source, Layer, ViewportProps } from 'react-map-gl';
import { FeatureCollection, Geometry } from 'geojson';
import countriesRaw from '../assets/maps/countries.geo.json';

const MAPBOX_TOKEN = process.env.token;
const countriesJSON = countriesRaw as FeatureCollection<Geometry>;

export const countriesLayer = {
  id: 'point',
  type: 'fill',
  paint: {
    'fill-outline-color': 'rgba(0,0,0,0.1)',
    'fill-color': 'rgba(0,0,0,0.1)',
  },
};

const Map: React.FC<{}> = () => {
  const [viewport, setViewport] = useState({
    latitude: 27.9,
    longitude: 14.6,
    zoom: 1.5,
    bearing: 0,
    pitch: 0,
  });

  const onViewportChange = (viewState: ViewportProps): void => {
    setViewport(viewState);
  };

  return (
    <>
      <MapGL
        {...viewport}
        width="inherit"
        height="inherit"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Source id="my-data" type="geojson" data={countriesJSON}>
          <Layer {...countriesLayer} />
        </Source>
      </MapGL>
    </>
  );
};

export default Map;
