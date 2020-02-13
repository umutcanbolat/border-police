/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapHighlightCountry } from '../interfaces/mapInterfaces';
import { emptyCountry, countriesSourceId } from '../constants/defaultValues';
import find from 'lodash/find';
import pickBy from 'lodash/pickBy';
import { VisaCountries, CountryCodesInfo } from '../interfaces/mapInterfaces';
import visaData from '../assets/data/visaData.json';
import countryCodes from '../assets/data/countryCodes.json';

const visaJSON = visaData as VisaCountries;
const countryCodesJSON = countryCodes as CountryCodesInfo;

export const getCountryVisaInfo = (features: any[]): MapHighlightCountry => {
  let { countryName, countryCode, visaFree, visaOnArrival, eVisa } = emptyCountry;
  let country = null;

  if (features) {
    country = find(features, ['source', countriesSourceId]);
  }

  if (country && country.properties) {
    countryName = country.properties.name;
    countryCode = country.properties.code;
    visaFree = Object.keys(pickBy(visaJSON[countryCode], ctr => ctr === '10'));
    visaOnArrival = Object.keys(pickBy(visaJSON[countryCode], ctr => ctr === '11'));
    eVisa = Object.keys(pickBy(visaJSON[countryCode], ctr => ctr === '01' || ctr === '12'));
  }

  return {
    countryName,
    countryCode,
    visaFree,
    visaOnArrival,
    eVisa,
  };
};

export const getCountryVisaInfoByCode = (code: string): MapHighlightCountry => {
  let { countryName, countryCode, visaFree, visaOnArrival, eVisa } = emptyCountry;

  if (code) {
    countryName = countryCodesJSON[code];
    countryCode = code;
    visaFree = Object.keys(pickBy(visaJSON[countryCode], ctr => ctr === '10'));
    visaOnArrival = Object.keys(pickBy(visaJSON[countryCode], ctr => ctr === '11'));
    eVisa = Object.keys(pickBy(visaJSON[countryCode], ctr => ctr === '01' || ctr === '12'));
  }

  return {
    countryName,
    countryCode,
    visaFree,
    visaOnArrival,
    eVisa,
  };
};
