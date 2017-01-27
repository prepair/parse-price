// id, symbol, precision
let currencies = [
  ['AED', '.د.إ'],
  ['BAM', 'KM'],
  ['BGN', 'лв'],
  ['CHF', 'CHF'],
  ['CZK', 'Kč'],
  ['EUR', '€'],
  ['GBP', '£'],
  ['GEL', '₾'],
  ['HRK', 'kn'],
  ['HUF', 'Ft', 0],
  ['ILS', '₪'],
  ['LTL', 'Lt'],
  ['LVL', 'Ls'],
  ['MKD', 'ден'],
  ['NOK', 'kr'],
  ['PLN', 'zł'],
  ['RON', 'lei'],
  ['RSD', 'Дин.'],
  ['RUB', '₽'],
  ['SEK', 'kr'],
  ['UAH', '₴'],
  ['USD', '$']
];

export function getCurrencyData () {
  const defaultPrecision = 2;
  return currencies.map(curr => ({
    id: curr[0],
    symbol: curr[1],
    precision: typeof curr[2] === 'number' ? curr[2] : defaultPrecision
  }));
}
