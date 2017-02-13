import { metadata } from '@prepair/locale-support';

export function getCurrencyData () {
  let curr = metadata.currencies;
  return Object.keys(curr).map(key => ({
    id: key,
    symbol: curr[key].symbol,
    precision: curr[key].precision
  }));
}
