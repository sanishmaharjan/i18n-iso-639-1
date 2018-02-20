'use strict';

const isoCodes = require('./data');
const i18nIsoFunctions = {
    getLanguages : function getLanguages(codes) {
        return codes.map(code => ({
            code,
            name: this.getName(code),
            nativeName: this.getNativeName(code),
        }));
    },
    getAllNames : function getAllNames() {
        return Object.values(isoCodes).map(l => l.name);
    },
    getName : function getName(code) {
        return this.validate(code) ? isoCodes[code].name : '';
    },
    getNativeName : function getNativeName(code) {
        return this.validate(code) ? isoCodes[code].nativeName : '';
    },
    getAllNativeNames : function getAllNativeNames() {
        return Object.values(isoCodes).map(l => l.nativeName);
    },
    getAllCodes : function getAllCodes() {
        return Object.keys(isoCodes);
    },
    getCode : function getCode(name) {
        const code = Object.keys(isoCodes).find(code => {
            const language = isoCodes[code];

            return (
                language.name.toLowerCase() === name.toLowerCase() ||
                language.nativeName.toLowerCase() === name.toLowerCase()
            );
        });
        return code || '';
    },
    validate : function validate(code) {
        return isoCodes[code] !== undefined;
    }
};

exports.i18nIsoFunctions = i18nIsoFunctions;