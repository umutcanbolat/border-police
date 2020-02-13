import {
  DEFAULT_LAYER_FILL,
  DEFAULT_LAYER_OUTLINE,
  MAP_HOVER_FILL,
  MAP_HOVER_OUTLINE,
  VISA_FREE_FILL,
  VISA_FREE_OUTLINE,
  VISA_ON_ARRIVAL_FILL,
  VISA_ON_ARRIVAL_OUTLINE,
  E_VISA_FILL,
  E_VISA_OUTLINE,
} from '../styles/colors';

/* beforeId adds these layer before the waterway-label.
 * This prevents country or city names from being hidden under our geojson layer
 */
export const countriesLayer = {
  id: 'constant-layer',
  type: 'fill',
  beforeId: 'waterway-label',
  paint: {
    'fill-color': DEFAULT_LAYER_FILL,
    'fill-outline-color': DEFAULT_LAYER_OUTLINE,
  },
};

export const hoverLayer = {
  id: 'hover-layer',
  type: 'fill',
  beforeId: 'waterway-label',
  paint: {
    'fill-color': MAP_HOVER_FILL,
    'fill-outline-color': MAP_HOVER_OUTLINE,
  },
};

export const visaFreeLayer = {
  id: 'visafree-layer',
  type: 'fill',
  beforeId: 'waterway-label',
  paint: {
    'fill-color': VISA_FREE_FILL,
    'fill-outline-color': VISA_FREE_OUTLINE,
  },
};

export const visaOnArrivalLayer = {
  id: 'visaonarrival-layer',
  type: 'fill',
  beforeId: 'waterway-label',
  paint: {
    'fill-color': VISA_ON_ARRIVAL_FILL,
    'fill-outline-color': VISA_ON_ARRIVAL_OUTLINE,
  },
};

export const eVisaLayer = {
  id: 'evisa-layer',
  type: 'fill',
  beforeId: 'waterway-label',
  paint: {
    'fill-color': E_VISA_FILL,
    'fill-outline-color': E_VISA_OUTLINE,
  },
};
