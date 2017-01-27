'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parsePrice;

var _metadata = require('./metadata');

const currencies = (0, _metadata.getCurrencyData)();

// thousand separators are followed by three digits (yeah, mostly),
// while decimal separators (if there is one) are followed by two digits
// (in case of the supported prices)
function toNumber(s) {
  s = s.replace(/[^\d,.]/g, '').trim(); // remove currency symbols and ids and whatnot
  let thousand = '';
  let match = s.match(/[., ]\d{3}/g);
  if (match && match.length) {
    if ([...new Set(match.map(val => val.replace(/\d/g, '')))].length > 1) {
      console.warn(`Could not detect thousand separator reliably for "${s}"`);
      match = [match[0]];
    }
    thousand = match[0].substr(0, 1);
  }
  s = s.replace(new RegExp(thousand + '(\\d{3})', 'g'), '$1');
  match = s.match(/,\d{2}/); // some dinars have 3 decimal places, but we do not support those
  if (match && match.length) {
    s = s.replace(/,(\d{2})/, '.$1');
  }
  return s.indexOf('.') > -1 ? parseFloat(s, 10) : parseInt(s, 10);
}

function parsePrice(s) {
  let currencyCode = null;
  s = s.toUpperCase();
  // first always iterate through all the currency codes
  for (let i = 0, l = currencies.length; i < l; i++) {
    let currency = currencies[i];
    if (s.includes(currency.id)) {
      currencyCode = currency.id;
      break;
    }
  }
  // and if that fails, try again with the symbol
  if (!currencyCode) {
    for (let i = 0, l = currencies.length; i < l; i++) {
      let currency = currencies[i];
      if (s.includes(currency.symbol)) {
        currencyCode = currency.id;
        break;
      }
    }
  }
  let value = toNumber(s);
  return { currencyCode, value };
}