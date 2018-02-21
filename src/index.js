const isoCodes = require('./data');

class IsoCodes {
  getLanguages(codes) {
    return codes.map(code => ({
      code,
      name: this.getName(code),
      nativeName: this.getNativeName(code)
    }));
  }

  getAllNames() {
    return Object.values(isoCodes).map(l => l.name);
  }

  getName(code) {
    return this.validate(code) ? isoCodes[code].name : '';
  }

  getAllNativeNames() {
    return Object.values(isoCodes).map(l => l.nativeName);
  }

  getNativeName(code) {
    return this.validate(code) ? isoCodes[code].nativeName : '';
  }

  getAllCodes() {
    return Object.keys(isoCodes);
  }

  getCode(name) {
    const code = Object.keys(isoCodes).find(code => {
      const language = isoCodes[code];

      return (
        language.name.toLowerCase() === name.toLowerCase() ||
                language.nativeName.toLowerCase() === name.toLowerCase()
      );
    });

    return code || '';
  }

  validate(code) {
    return isoCodes[code] !== undefined;
  }
}

export default new IsoCodes();
