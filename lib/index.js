'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parsePrice;

var _metadata = require('./metadata');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var currencies = (0, _metadata.getCurrencyData)();

// thousand separators are followed by three digits (yeah, mostly),
// while decimal separators (if there is one) are followed by two digits
// (in case of the supported prices)
function toNumber(s) {
  s = s.replace(/[^\d,.]/g, '').trim(); // remove currency symbols and ids and whatnot
  var thousand = '';
  var match = s.match(/[., ]\d{3}/g);
  if (match && match.length) {
    if ([].concat(_toConsumableArray(new Set(match.map(function (val) {
      return val.replace(/\d/g, '');
    })))).length > 1) {
      console.warn('Could not detect thousand separator reliably for "' + s + '"');
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
  var currencyCode = null;
  s = s.toUpperCase();
  // first always iterate through all the currency codes
  for (var i = 0, l = currencies.length; i < l; i++) {
    var currency = currencies[i];
    if (s.includes(currency.id)) {
      currencyCode = currency.id;
      break;
    }
  }
  // and if that fails, try again with the symbol
  if (!currencyCode) {
    for (var _i = 0, _l = currencies.length; _i < _l; _i++) {
      var _currency = currencies[_i];
      if (s.includes(_currency.symbol)) {
        currencyCode = _currency.id;
        break;
      }
    }
  }
  var value = toNumber(s);
  return { currencyCode: currencyCode, value: value };
}