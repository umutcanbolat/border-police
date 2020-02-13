import { useReducer, Dispatch } from 'react';
import { MapHighlightCountry } from '../interfaces/mapInterfaces';

/**
 *  Sets the new state if only the new countrycode is different than the current state's
 */
export const useMapCountry = (
  initialCountry: MapHighlightCountry,
): [MapHighlightCountry, Dispatch<MapHighlightCountry>] => {
  return useReducer(
    (state: MapHighlightCountry, payload: MapHighlightCountry) =>
      state.countryCode !== payload.countryCode ? payload : state,
    initialCountry,
  );
};
