import chai from 'chai';
chai.expect();
const expect = chai.expect;

let i18nIso = require('../build/i18n-iso-639-1');

describe('ISO6391 library utilities', () => {
  it('Should return valid language name', function () {
    expect(i18nIso.getName('en')).to.be.equal('English');
    expect(i18nIso.getName('pt')).to.be.equal('Portuguese');
    expect(i18nIso.getName('es')).to.be.equal('Spanish');
  });

  it('Should return valid native language Name', function () {
    expect(i18nIso.getNativeName('en')).to.be.equal('English');
    expect(i18nIso.getNativeName('zh')).to.be.equal('中文');
    expect(i18nIso.getNativeName('es')).to.be.equal('Español');
  });

  it('Should return valid locale code', function () {
    expect(i18nIso.getCode('English')).to.be.equal('en');
    expect(i18nIso.getCode('Portuguese')).to.be.equal('pt');
    expect(i18nIso.getCode('Spanish')).to.be.equal('es');
    expect(i18nIso.getCode('xx')).to.be.equal('');
  });

  it('Should valid locale code', function () {
    expect(i18nIso.validate('en')).to.be.equal(true);
    expect(i18nIso.validate('xx')).to.be.equal(false);
    expect(i18nIso.validate('es')).to.be.equal(true);
  });

  it('Should return languages', function () {
    expect(i18nIso.getLanguages(['en', 'zh'])).to.deep.equal([
      {
        code: 'en',
        name: 'English',
        nativeName: 'English'
      },
      {
        code: 'zh',
        name: 'Chinese',
        nativeName: '中文'
      }
    ]);
  });
})