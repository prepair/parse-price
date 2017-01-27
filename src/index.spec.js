import { expect } from 'chai';
import parsePrice from './';

describe('get-location', () => {
  it('should find currency data and value in a price string', () => {
    // TODO doublecheck BAM
    expect(parsePrice('7,681.38 BAM'))
      .to.eql({currencyCode: 'BAM', value: 7681.38});

    // TODO doublecheck GEL
    expect(parsePrice('11,341.89 GEL'))
      .to.eql({currencyCode: 'GEL', value: 11341.89});

    expect(parsePrice('AED875.17'))
      .to.eql({currencyCode: 'AED', value: 875.17});

    expect(parsePrice('433.85 BGN'))
      .to.eql({currencyCode: 'BGN', value: 433.85});

    expect(parsePrice('CHF238.05'))
      .to.eql({currencyCode: 'CHF', value: 238.05});

    expect(parsePrice('CZK5993,35'))
      .to.eql({currencyCode: 'CZK', value: 5993.35});

    expect(parsePrice('221,81 €'))
      .to.eql({currencyCode: 'EUR', value: 221.81});

    expect(parsePrice('£188.89'))
      .to.eql({currencyCode: 'GBP', value: 188.89});

    expect(parsePrice('HRK1662.66'))
      .to.eql({currencyCode: 'HRK', value: 1662.66});

    expect(parsePrice('HUF68629'))
      .to.eql({currencyCode: 'HUF', value: 68629});

    expect(parsePrice('₪901.36'))
      .to.eql({currencyCode: 'ILS', value: 901.36});

    expect(parsePrice('MKD12,955.86'))
      .to.eql({currencyCode: 'MKD', value: 12955.86});

    expect(parsePrice('NOK1879,90'))
      .to.eql({currencyCode: 'NOK', value: 1879.9});

    expect(parsePrice('PLN916,80'))
      .to.eql({currencyCode: 'PLN', value: 916.8});

    expect(parsePrice('1.003,55 RON'))
      .to.eql({currencyCode: 'RON', value: 1003.55});

    expect(parsePrice('RSD27,635.05'))
      .to.eql({currencyCode: 'RSD', value: 27635.05});

    expect(parsePrice('2 114 SEK'))
      .to.eql({currencyCode: 'SEK', value: 2114});

    expect(parsePrice('UAH6,516.19'))
      .to.eql({currencyCode: 'UAH', value: 6516.19});

    expect(parsePrice('US$238.27'))
      .to.eql({currencyCode: 'USD', value: 238.27});
  });

  it('should detect thousand and decimal separators for the supported currencies', () => {
    expect(parsePrice('$ 100.10'))
      .to.eql({currencyCode: 'USD', value: 100.1});

    expect(parsePrice('$ 100 000.10'))
      .to.eql({currencyCode: 'USD', value: 100000.1});

    expect(parsePrice('$ 100,000,000.10'))
      .to.eql({currencyCode: 'USD', value: 100000000.1});

    expect(parsePrice('$ 100.000,10'))
      .to.eql({currencyCode: 'USD', value: 100000.1});
  });
});
