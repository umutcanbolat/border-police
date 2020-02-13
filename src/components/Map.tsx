import React, { useState, useCallback, useMemo } from 'react';
import MapGL, { Source, Layer, ViewportProps, PointerEvent } from 'react-map-gl';
import SidePanel from '../components/SidePanel';
import { FeatureCollection, Geometry } from 'geojson';
import { getCountryVisaInfo, getCountryVisaInfoByCode } from '../utils/mapUtil';
import { useMapCountry } from '../hooks/mapHooks';
import { emptyCountry, countriesSourceId } from '../constants/defaultValues';
import {
  countriesLayer,
  hoverLayer,
  visaFreeLayer,
  visaOnArrivalLayer,
  eVisaLayer,
} from '../constants/mapLayers';
import countriesRaw from '../assets/maps/countries.geo.min.json';

const MAPBOX_TOKEN = process.env.token;
const countriesJSON = countriesRaw as FeatureCollection<Geometry>;

const Map: React.FC<{}> = () => {
  const [viewport, setViewport] = useState({
    latitude: 27.9,
    longitude: 14.6,
    zoom: 1.5,
    bearing: 0,
    pitch: 0,
  });

  const [hoverCountry, setHoverCountry] = useMapCountry(emptyCountry);
  const [selectedCountry, setSelectedCountry] = useMapCountry(emptyCountry);

  const onViewportChange = (viewState: ViewportProps): void => {
    // TODO: consider throttling here
    setViewport(viewState);
  };

  const clearHoverCountry = (): void => {
    setHoverCountry(emptyCountry);
  };

  const clearSelectedCountry = (): void => {
    setSelectedCountry(emptyCountry);
  };

  const changeSelectedCountry = useCallback((countryCode: string): void => {
    setSelectedCountry(getCountryVisaInfoByCode(countryCode));
  }, []);

  const onHover = (event: PointerEvent): void => {
    setHoverCountry(getCountryVisaInfo(event.features));
  };

  const onClick = useCallback(
    (event: PointerEvent): void => {
      const { countryName, countryCode, visaFree, visaOnArrival, eVisa } = getCountryVisaInfo(
        event.features,
      );

      if (countryCode === selectedCountry.countryCode) {
        // if user clicks on the selected country again, clean selection
        clearSelectedCountry();
        clearHoverCountry();
      } else {
        setSelectedCountry({
          countryName,
          countryCode,
          visaFree,
          visaOnArrival,
          eVisa,
        });
      }
    },
    [selectedCountry],
  );

  return useMemo(() => {
    const { visaFree, visaOnArrival, eVisa, countryName } =
      hoverCountry.countryName !== '' ? hoverCountry : selectedCountry;

    return (
      <>
        <MapGL
          {...viewport}
          width="inherit"
          height="inherit"
          mapStyle="mapbox://styles/mapbox/light-v10"
          onViewportChange={onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onHover={onHover}
          onNativeClick={onClick}
          onMouseOut={clearHoverCountry}
        >
          <Source id={countriesSourceId} type="geojson" data={countriesJSON}>
            <Layer {...countriesLayer} />
            <Layer {...visaFreeLayer} filter={['in', 'code', ...visaFree]} />
            <Layer {...visaOnArrivalLayer} filter={['in', 'code', ...visaOnArrival]} />
            <Layer {...eVisaLayer} filter={['in', 'code', ...eVisa]} />
            <Layer {...hoverLayer} filter={['==', 'name', countryName]} />
          </Source>
        </MapGL>
        <SidePanel
          hoveredCountryCode={hoverCountry.countryCode}
          selectedCountryCode={selectedCountry.countryCode}
          onSelect={changeSelectedCountry}
        />
      </>
    );
  }, [viewport, hoverCountry, selectedCountry, onClick]);
};

export default Map;
