'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrencyData = getCurrencyData;
// id, symbol, precision
var currencies = [['AED', '.د.إ'], ['BAM', 'KM'], ['BGN', 'лв'], ['CHF', 'CHF'], ['CZK', 'Kč'], ['EUR', '€'], ['GBP', '£'], ['GEL', '₾'], ['HRK', 'kn'], ['HUF', 'Ft', 0], ['ILS', '₪'], ['LTL', 'Lt'], ['LVL', 'Ls'], ['MKD', 'ден'], ['NOK', 'kr'], ['PLN', 'zł'], ['RON', 'lei'], ['RSD', 'Дин.'], ['RUB', '₽'], ['SEK', 'kr'], ['UAH', '₴'], ['USD', '$']];

function getCurrencyData() {
  var defaultPrecision = 2;
  return currencies.map(function (curr) {
    return {
      id: curr[0],
      symbol: curr[1],
      precision: typeof curr[2] === 'number' ? curr[2] : defaultPrecision
    };
  });
}