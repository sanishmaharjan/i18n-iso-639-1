const assert = require('assert');
const i18nIso = require('../index');

describe('ISO6391', function() {
    it('Should return valid language name', function() {
        assert.equal(i18nIso.getName('en'), 'English');
        assert.equal(i18nIso.getName('pt'), 'Portuguese');
        assert.equal(i18nIso.getName('es'), 'Spanish');
    });

    it('Should return valid native language Name', function() {
        assert.equal(i18nIso.getNativeName('en'), 'English');
        assert.equal(i18nIso.getNativeName('zh'), '中文');
        assert.equal(i18nIso.getNativeName('es'), 'Español');
    });

    it('Should return valid locale code', function() {
        assert.equal(i18nIso.getCode('English'), 'en');
        assert.equal(i18nIso.getCode('Portuguese'), 'pt');
        assert.equal(i18nIso.getCode('Spanish'), 'es');
        assert.equal(i18nIso.getCode('xx'), '');
    });

    it('Should valid locale code', function() {
        assert.equal(i18nIso.validate('en'), true);
        assert.equal(i18nIso.validate('xx'), false);
        assert.equal(i18nIso.validate('es'), true);
    });

    it('Should return languages', function () {
        it('[en, zh]', function() {
            assert.deepEqual(i18nIso.getLanguages(['en', 'zh', 'xx']), [
                {
                    code: 'en',
                    name: 'English',
                    nativeName: 'English',
                },
                {
                    code: 'zh',
                    name: 'Chinese',
                    nativeName: '中文',
                }
            ]);
        });
    });
});
