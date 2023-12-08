export const LOCATION = 'LOCATION';

export function currentLocation(i) {
  return {
    type: LOCATION,
    payload: i,
  };
}
