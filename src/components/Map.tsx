import React, { useState, useCallback, useMemo } from 'react';
import MapGL, { Source, Layer, ViewportProps, PointerEvent } from 'react-map-gl';
import { FeatureCollection, Geometry } from 'geojson';
import find from 'lodash/find';
import pickBy from 'lodash/pickBy';
import { VisaCountries } from '../interfaces/mapInterfaces';
import countriesRaw from '../assets/maps/countries.geo.min.json';
import visaData from '../assets/data/visaData.json';

const MAPBOX_TOKEN = process.env.token;
const countriesJSON = countriesRaw as FeatureCollection<Geometry>;
const visaJSON = visaData as VisaCountries;
const countriesSourceId = 'countries.geo.json';

const countriesLayer = {
  id: 'constant-layer',
  type: 'fill',
  paint: {
    'fill-outline-color': 'rgba(0,0,0,0.1)',
    'fill-color': 'rgba(0,0,0,0)',
  },
};

const hoverLayer = {
  id: 'hover-layer',
  type: 'fill',
  paint: {
    'fill-outline-color': 'rgba(0,0,0,0.1)',
    'fill-color': 'rgba(0,0,0,0.2)',
  },
};

const highlightLayer = {
  id: 'highlight-layer',
  type: 'fill',
  paint: {
    'fill-outline-color': 'rgba(0,255,0,0.1)',
    'fill-color': 'rgba(0,255,0,0.2)',
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

  const [hoverCountry, setHoverCountry] = useState({
    countryName: '',
    countryCode: '',
    visaFree: [''],
  });

  const onViewportChange = useCallback((viewState: ViewportProps): void => {
    setViewport(viewState);
  }, []);

  const onHover = useCallback((event: PointerEvent): void => {
    // const mouseLocation: [number, number] = event.lngLat;
    let countryName = '';
    let countryCode = '';
    let visaFree = [''];

    let country = null;
    if (event.features) {
      country = find(event.features, ['source', countriesSourceId]);
    }

    if (country && country.properties) {
      countryName = country.properties.name;
      countryCode = country.properties.code;

      visaFree = Object.keys(pickBy(visaJSON[countryCode], ctr => ctr === '10'));

      setHoverCountry({ countryName, countryCode, visaFree });
    } else {
      setHoverCountry({ countryName: '', countryCode: '', visaFree: [''] });
    }

    // console.log(countryName, countryCode, mouseLocation);
    // console.log(visaFree);
  }, []);

  return useMemo(() => {
    return (
      <>
        <MapGL
          {...viewport}
          width="inherit"
          height="inherit"
          mapStyle="mapbox://styles/mapbox/light-v9"
          onViewportChange={onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onHover={onHover}
        >
          <Source id={countriesSourceId} type="geojson" data={countriesJSON}>
            {/* beforeId adds countries layer before the waterway-label. */}
            {/* This prevents country or city names from being hidden under our geojson layer */}
            <Layer beforeId="waterway-label" {...countriesLayer} />
            <Layer
              beforeId="waterway-label"
              {...hoverLayer}
              filter={['==', 'name', hoverCountry.countryName]}
            />
            <Layer
              beforeId="waterway-label"
              {...highlightLayer}
              filter={['in', 'code', ...hoverCountry.visaFree]}
            />
          </Source>
        </MapGL>
      </>
    );
  }, [viewport, hoverCountry]);
};

export default Map;
