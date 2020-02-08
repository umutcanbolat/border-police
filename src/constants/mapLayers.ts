/* beforeId adds these layer before the waterway-label.
 * This prevents country or city names from being hidden under our geojson layer
 */
export const countriesLayer = {
  id: 'constant-layer',
  type: 'fill',
  beforeId: 'waterway-label',
  paint: {
    'fill-outline-color': 'rgba(0,0,0,0.1)',
    'fill-color': 'rgba(0,0,0,0)',
  },
};

export const hoverLayer = {
  id: 'hover-layer',
  type: 'fill',
  beforeId: 'waterway-label',
  paint: {
    'fill-outline-color': 'rgb(0, 0, 0)',
    'fill-color': 'rgba(0, 0, 0, 0.2)',
  },
};

export const visaFreeLayer = {
  id: 'visafree-layer',
  type: 'fill',
  beforeId: 'waterway-label',
  paint: {
    'fill-outline-color': 'rgb(0, 230, 0)',
    'fill-color': 'rgba(0, 255, 0, 0.2)',
  },
};

export const visaOnArrivalLayer = {
  id: 'visaonarrival-layer',
  type: 'fill',
  beforeId: 'waterway-label',
  paint: {
    'fill-outline-color': 'rgba(0, 102, 51, 0.2)',
    'fill-color': 'rgba(0, 102, 51, 0.2)',
  },
};

export const eVisaLayer = {
  id: 'evisa-layer',
  type: 'fill',
  beforeId: 'waterway-label',
  paint: {
    'fill-outline-color': 'rgb(204, 204, 0)',
    'fill-color': 'rgba(255, 255, 0, 0.2)',
  },
};
