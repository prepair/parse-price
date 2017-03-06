# parse-price

Parse price text into currency and value.

```
"US$238.27"  --> { currencyCode: 'USD', value: 238.27 }
"221,81 €"   --> { currencyCode: 'EUR', value: 221.81 }
```

* Supported currencies: AED, BAM, BGN, CHF, CZK, DKK, EUR, GBP, GEL, HRK, HUF, ILS, LVL, MKD, NOK, PLN, RON, RSD, RUB, SEK, UAH, USD
* Will not be supported: BHD, IQD, JOD, KWD, LYD, OMR, TND
* Exact list may be found in [locale-support](https://github.com/prepair/locale-support) package.

## installation

```
npm i -S @prepair/parse-price
```

Requires node v6+ context.

## usage

```
const parsePrice = require('@prepair/parse-price');

console.log(parsePrice('MKD12,955.86'));
```

## development

Do not forget to `npm run build`, or set it up in the CI.
