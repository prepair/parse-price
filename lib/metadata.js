'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrencyData = getCurrencyData;

var _localeSupport = require('@prepair/locale-support');

function getCurrencyData() {
  var curr = _localeSupport.metadata.currencies;
  return Object.keys(curr).map(function (key) {
    return {
      id: key,
      symbol: curr[key].symbol,
      precision: curr[key].precision
    };
  });
}