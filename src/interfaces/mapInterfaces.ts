/**
 *  A collection of countries with their visa requirements for the parent country.
 *
 *  00: visa required (deleted in the visaData.json because no need to store this type)
 *  01: e-visa
 *  10: visa free access
 *  11: visa on arrival
 *  12: Electronic Travel Authorization (eTA)
 *
 */
export interface VisaInfo {
  [key: string]: string;
}

/**
 *  A collection of countries with their visa info when visiting the child countries.
 */
export interface VisaCountries {
  [key: string]: VisaInfo;
}

/**
 *  stores basic country info
 */
export interface Country {
  name: string;
  code: string;
}

/**
 *  holds the relations between regions and countries
 */
export interface Regions {
  [key: string]: Country[];
}

export interface MapHighlightCountry {
  countryName: string;
  countryCode: string;
  visaFree: string[];
  visaOnArrival: string[];
  eVisa: string[];
}

/**
 *  Mappings of country codes and country names
 *
 *  ex: TR: Turkey
 *
 */
export interface CountryCodesInfo {
  [key: string]: string;
}
