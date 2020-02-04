import React, { useState, useCallback } from 'react';
import MapGL, { Source, Layer, ViewportProps, PointerEvent } from 'react-map-gl';
import { FeatureCollection, Geometry } from 'geojson';
import find from 'lodash/find';
import countriesRaw from '../assets/maps/countries.geo.json';

const MAPBOX_TOKEN = process.env.token;
const countriesJSON = countriesRaw as FeatureCollection<Geometry>;
const countriesLayerId = 'countries.geo.json';

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

  const onViewportChange = useCallback((viewState: ViewportProps): void => {
    setViewport(viewState);
  }, []);

  const onHover = useCallback((event: PointerEvent): void => {
    const mouseLocation: [number, number] = event.lngLat;
    let countryName = '';

    let country = null;
    if (event.features) {
      country = find(event.features, ['source', countriesLayerId]);
    }

    if (country) {
      countryName = country.properties ? country.properties.name : '';
    }

    console.log(countryName, mouseLocation);
  }, []);

  return (
    <>
      <MapGL
        {...viewport}
        width="inherit"
        height="inherit"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onHover={onHover}
      >
        <Source id={countriesLayerId} type="geojson" data={countriesJSON}>
          {/* beforeId adds countries layer before the waterway-label. */}
          {/* This prevents country or city names from being hidden under our geojson layer */}
          <Layer beforeId="waterway-label" {...countriesLayer} />
          {/* <Layer {...highlightLayer} filter={filter} /> */}
        </Source>
      </MapGL>
    </>
  );
};

export default Map;
