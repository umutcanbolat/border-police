import React, { useState, useCallback, useMemo } from 'react';
import MapGL, { Source, Layer, ViewportProps, PointerEvent } from 'react-map-gl';
import { FeatureCollection, Geometry } from 'geojson';
import find from 'lodash/find';
import pickBy from 'lodash/pickBy';
import { VisaCountries } from '../interfaces/mapInterfaces';
import {
  countriesLayer,
  hoverLayer,
  visaFreeLayer,
  visaOnArrivalLayer,
  eVisaLayer,
} from '../constants/mapLayers';
import countriesRaw from '../assets/maps/countries.geo.min.json';
import visaData from '../assets/data/visaData.json';

const MAPBOX_TOKEN = process.env.token;
const countriesJSON = countriesRaw as FeatureCollection<Geometry>;
const visaJSON = visaData as VisaCountries;
const countriesSourceId = 'countries.geo.json';

const Map: React.FC<{}> = () => {
  const [viewport, setViewport] = useState({
    latitude: 27.9,
    longitude: 14.6,
    zoom: 1.5,
    bearing: 0,
    pitch: 0,
  });

  const defaultHoverCountry = {
    countryName: '',
    countryCode: '',
    visaFree: [''],
    visaOnArrival: [''],
    eVisa: [''],
  };
  const [hoverCountry, setHoverCountry] = useState(defaultHoverCountry);

  const onViewportChange = useCallback((viewState: ViewportProps): void => {
    setViewport(viewState);
  }, []);

  const onHover = useCallback((event: PointerEvent): void => {
    // const mouseLocation: [number, number] = event.lngLat;
    let { countryName, countryCode, visaFree, visaOnArrival, eVisa } = defaultHoverCountry;

    let country = null;
    if (event.features) {
      country = find(event.features, ['source', countriesSourceId]);
    }

    if (country && country.properties) {
      countryName = country.properties.name;
      countryCode = country.properties.code;
      visaFree = Object.keys(pickBy(visaJSON[countryCode], ctr => ctr === '10'));
      visaOnArrival = Object.keys(pickBy(visaJSON[countryCode], ctr => ctr === '11'));
      eVisa = Object.keys(pickBy(visaJSON[countryCode], ctr => ctr === '01' || ctr === '12'));
    }
    setHoverCountry({ countryName, countryCode, visaFree, visaOnArrival, eVisa });

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
            <Layer {...countriesLayer} />
            <Layer {...visaFreeLayer} filter={['in', 'code', ...hoverCountry.visaFree]} />
            <Layer {...visaOnArrivalLayer} filter={['in', 'code', ...hoverCountry.visaOnArrival]} />
            <Layer {...eVisaLayer} filter={['in', 'code', ...hoverCountry.eVisa]} />
            <Layer {...hoverLayer} filter={['==', 'name', hoverCountry.countryName]} />
          </Source>
        </MapGL>
      </>
    );
  }, [viewport, hoverCountry]);
};

export default Map;
