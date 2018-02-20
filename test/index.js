const assert = require('assert');
const ISO6391 = require('../src/index');

describe('ISO6391', function() {
    it('Should return valid language name', function() {
        assert.equal(ISO6391.getName('en'), 'English');
        assert.equal(ISO6391.getName('pt'), 'Portuguese');
        assert.equal(ISO6391.getName('es'), 'Spanish');
    });

    it('Should return valid native language Name', function() {
        assert.equal(ISO6391.getNativeName('en'), 'English');
        assert.equal(ISO6391.getNativeName('zh'), '中文');
        assert.equal(ISO6391.getNativeName('es'), 'Español');
    });

    it('Should return valid locale code', function() {
        assert.equal(ISO6391.getCode('English'), 'en');
        assert.equal(ISO6391.getCode('Portuguese'), 'pt');
        assert.equal(ISO6391.getCode('Spanish'), 'es');
        assert.equal(ISO6391.getCode('xx'), '');
    });

    it('Should valid locale code', function() {
        assert.equal(ISO6391.validate('en'), true);
        assert.equal(ISO6391.validate('xx'), false);
        assert.equal(ISO6391.validate('es'), true);
    });

    it('Should return languages', function () {
        it('[en, zh]', function() {
            assert.deepEqual(ISO6391.getLanguages(['en', 'zh', 'xx']), [
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
