const isoCodes = require('./data');

module.exports = class ISO6391 {
    static getLanguages(codes = []) {
        return codes.map(code => ({
            code,
            name: ISO6391.getName(code),
            nativeName: ISO6391.getNativeName(code),
        }));
    }

    static getAllNames() {
        return Object.values(isoCodes).map(l => l.name);
    }

    static getName(code) {
        return ISO6391.validate(code) ? isoCodes[code].name : '';
    }

    static getNativeName(code) {
        return ISO6391.validate(code) ? isoCodes[code].nativeName : '';
    }

    static getAllNativeNames() {
        return Object.values(isoCodes).map(l => l.nativeName);
    }

    static getAllCodes() {
        return Object.keys(isoCodes);
    }

    static getCode(name) {
        const code = Object.keys(isoCodes).find(code => {
            const language = isoCodes[code];

            return (
                language.name.toLowerCase() === name.toLowerCase() ||
                language.nativeName.toLowerCase() === name.toLowerCase()
            );
        });
        return code || '';
    }

    static validate(code) {
        return isoCodes[code] !== undefined;
    }
};