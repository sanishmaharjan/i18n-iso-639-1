(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n-iso-639-1", [], factory);
	else if(typeof exports === 'object')
		exports["i18n-iso-639-1"] = factory();
	else
		root["i18n-iso-639-1"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isoCodes = __webpack_require__(1);

var IsoCodes = function () {
  function IsoCodes() {
    _classCallCheck(this, IsoCodes);
  }

  _createClass(IsoCodes, [{
    key: 'getLanguages',
    value: function getLanguages(codes) {
      var _this = this;

      return codes.map(function (code) {
        return {
          code: code,
          name: _this.getName(code),
          nativeName: _this.getNativeName(code)
        };
      });
    }
  }, {
    key: 'getAllNames',
    value: function getAllNames() {
      return Object.values(isoCodes).map(function (l) {
        return l.name;
      });
    }
  }, {
    key: 'getName',
    value: function getName(code) {
      return this.validate(code) ? isoCodes[code].name : '';
    }
  }, {
    key: 'getAllNativeNames',
    value: function getAllNativeNames() {
      return Object.values(isoCodes).map(function (l) {
        return l.nativeName;
      });
    }
  }, {
    key: 'getNativeName',
    value: function getNativeName(code) {
      return this.validate(code) ? isoCodes[code].nativeName : '';
    }
  }, {
    key: 'getAllCodes',
    value: function getAllCodes() {
      return Object.keys(isoCodes);
    }
  }, {
    key: 'getCode',
    value: function getCode(name) {
      var code = Object.keys(isoCodes).find(function (code) {
        var language = isoCodes[code];

        return language.name.toLowerCase() === name.toLowerCase() || language.nativeName.toLowerCase() === name.toLowerCase();
      });

      return code || '';
    }
  }, {
    key: 'validate',
    value: function validate(code) {
      return isoCodes[code] !== undefined;
    }
  }]);

  return IsoCodes;
}();

exports.default = new IsoCodes();
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"aa":{"name":"Afar","nativeName":"Afaraf"},"ab":{"name":"Abkhaz","nativeName":"аҧсуа бызшәа"},"ae":{"name":"Avestan","nativeName":"avesta"},"af":{"name":"Afrikaans","nativeName":"Afrikaans"},"ak":{"name":"Akan","nativeName":"Akan"},"am":{"name":"Amharic","nativeName":"አማርኛ"},"an":{"name":"Aragonese","nativeName":"aragonés"},"ar":{"name":"Arabic","nativeName":"اللغة العربية"},"as":{"name":"Assamese","nativeName":"অসমীয়া"},"av":{"name":"Avaric","nativeName":"авар мацӀ"},"ay":{"name":"Aymara","nativeName":"aymar aru"},"az":{"name":"Azerbaijani","nativeName":"azərbaycan dili"},"ba":{"name":"Bashkir","nativeName":"башҡорт теле"},"be":{"name":"Belarusian","nativeName":"беларуская мова"},"bg":{"name":"Bulgarian","nativeName":"български език"},"bh":{"name":"Bihari","nativeName":"भोजपुरी"},"bi":{"name":"Bislama","nativeName":"Bislama"},"bm":{"name":"Bambara","nativeName":"bamanankan"},"bn":{"name":"Bengali","nativeName":"বাংলা"},"bo":{"name":"Tibetan Standard","nativeName":"བོད་ཡིག"},"br":{"name":"Breton","nativeName":"brezhoneg"},"bs":{"name":"Bosnian","nativeName":"bosanski jezik"},"ca":{"name":"Catalan","nativeName":"català"},"ce":{"name":"Chechen","nativeName":"нохчийн мотт"},"ch":{"name":"Chamorro","nativeName":"Chamoru"},"co":{"name":"Corsican","nativeName":"corsu"},"cr":{"name":"Cree","nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"},"cs":{"name":"Czech","nativeName":"čeština"},"cu":{"name":"Old Church Slavonic","nativeName":"ѩзыкъ словѣньскъ"},"cv":{"name":"Chuvash","nativeName":"чӑваш чӗлхи"},"cy":{"name":"Welsh","nativeName":"Cymraeg"},"da":{"name":"Danish","nativeName":"dansk"},"de":{"name":"German","nativeName":"Deutsch"},"dv":{"name":"Divehi","nativeName":"Dhivehi"},"dz":{"name":"Dzongkha","nativeName":"རྫོང་ཁ"},"ee":{"name":"Ewe","nativeName":"Eʋegbe"},"el":{"name":"Greek","nativeName":"ελληνικά"},"en":{"name":"English","nativeName":"English"},"eo":{"name":"Esperanto","nativeName":"Esperanto"},"es":{"name":"Spanish","nativeName":"Español"},"et":{"name":"Estonian","nativeName":"eesti"},"eu":{"name":"Basque","nativeName":"euskara"},"fa":{"name":"Persian","nativeName":"فارسی"},"ff":{"name":"Fula","nativeName":"Fulfulde"},"fi":{"name":"Finnish","nativeName":"suomi"},"fj":{"name":"Fijian","nativeName":"Vakaviti"},"fo":{"name":"Faroese","nativeName":"føroyskt"},"fr":{"name":"French","nativeName":"Français"},"fy":{"name":"Western Frisian","nativeName":"Frysk"},"ga":{"name":"Irish","nativeName":"Gaeilge"},"gd":{"name":"Scottish Gaelic","nativeName":"Gàidhlig"},"gl":{"name":"Galician","nativeName":"galego"},"gn":{"name":"Guaraní","nativeName":"Avañe'ẽ"},"gu":{"name":"Gujarati","nativeName":"ગુજરાતી"},"gv":{"name":"Manx","nativeName":"Gaelg"},"ha":{"name":"Hausa","nativeName":"هَوُسَ"},"he":{"name":"Hebrew","nativeName":"עברית"},"hi":{"name":"Hindi","nativeName":"हिन्दी"},"ho":{"name":"Hiri Motu","nativeName":"Hiri Motu"},"hr":{"name":"Croatian","nativeName":"hrvatski jezik"},"ht":{"name":"Haitian","nativeName":"Kreyòl ayisyen"},"hu":{"name":"Hungarian","nativeName":"magyar"},"hy":{"name":"Armenian","nativeName":"Հայերեն"},"hz":{"name":"Herero","nativeName":"Otjiherero"},"ia":{"name":"Interlingua","nativeName":"Interlingua"},"id":{"name":"Indonesian","nativeName":"Indonesian"},"ie":{"name":"Interlingue","nativeName":"Interlingue"},"ig":{"name":"Igbo","nativeName":"Asụsụ Igbo"},"ii":{"name":"Nuosu","nativeName":"ꆈꌠ꒿ Nuosuhxop"},"ik":{"name":"Inupiaq","nativeName":"Iñupiaq"},"io":{"name":"Ido","nativeName":"Ido"},"is":{"name":"Icelandic","nativeName":"Íslenska"},"it":{"name":"Italian","nativeName":"Italiano"},"iu":{"name":"Inuktitut","nativeName":"ᐃᓄᒃᑎᑐᑦ"},"ja":{"name":"Japanese","nativeName":"日本語"},"jv":{"name":"Javanese","nativeName":"basa Jawa"},"ka":{"name":"Georgian","nativeName":"ქართული"},"kg":{"name":"Kongo","nativeName":"Kikongo"},"ki":{"name":"Kikuyu","nativeName":"Gĩkũyũ"},"kj":{"name":"Kwanyama","nativeName":"Kuanyama"},"kk":{"name":"Kazakh","nativeName":"қазақ тілі"},"kl":{"name":"Kalaallisut","nativeName":"kalaallisut"},"km":{"name":"Khmer","nativeName":"ខេមរភាសា"},"kn":{"name":"Kannada","nativeName":"ಕನ್ನಡ"},"ko":{"name":"Korean","nativeName":"한국어"},"kr":{"name":"Kanuri","nativeName":"Kanuri"},"ks":{"name":"Kashmiri","nativeName":"कश्मीरी"},"ku":{"name":"Kurdish","nativeName":"Kurdî"},"kv":{"name":"Komi","nativeName":"коми кыв"},"kw":{"name":"Cornish","nativeName":"Kernewek"},"ky":{"name":"Kyrgyz","nativeName":"Кыргызча"},"la":{"name":"Latin","nativeName":"latine"},"lb":{"name":"Luxembourgish","nativeName":"Lëtzebuergesch"},"lg":{"name":"Ganda","nativeName":"Luganda"},"li":{"name":"Limburgish","nativeName":"Limburgs"},"ln":{"name":"Lingala","nativeName":"Lingála"},"lo":{"name":"Lao","nativeName":"ພາສາ"},"lt":{"name":"Lithuanian","nativeName":"lietuvių kalba"},"lu":{"name":"Luba-Katanga","nativeName":"Tshiluba"},"lv":{"name":"Latvian","nativeName":"latviešu valoda"},"mg":{"name":"Malagasy","nativeName":"fiteny malagasy"},"mh":{"name":"Marshallese","nativeName":"Kajin M̧ajeļ"},"mi":{"name":"Māori","nativeName":"te reo Māori"},"mk":{"name":"Macedonian","nativeName":"македонски јазик"},"ml":{"name":"Malayalam","nativeName":"മലയാളം"},"mn":{"name":"Mongolian","nativeName":"Монгол хэл"},"mr":{"name":"Marathi","nativeName":"मराठी"},"ms":{"name":"Malay","nativeName":"هاس ملايو‎"},"mt":{"name":"Maltese","nativeName":"Malti"},"my":{"name":"Burmese","nativeName":"ဗမာစာ"},"na":{"name":"Nauru","nativeName":"Ekakairũ Naoero"},"nb":{"name":"Norwegian Bokmål","nativeName":"Norsk bokmål"},"nd":{"name":"Northern Ndebele","nativeName":"isiNdebele"},"ne":{"name":"Nepali","nativeName":"नेपाली"},"ng":{"name":"Ndonga","nativeName":"Owambo"},"nl":{"name":"Dutch","nativeName":"Nederlands"},"nn":{"name":"Norwegian Nynorsk","nativeName":"Norsk nynorsk"},"no":{"name":"Norwegian","nativeName":"Norsk"},"nr":{"name":"Southern Ndebele","nativeName":"isiNdebele"},"nv":{"name":"Navajo","nativeName":"Diné bizaad"},"ny":{"name":"Chichewa","nativeName":"chiCheŵa"},"oc":{"name":"Occitan","nativeName":"occitan"},"oj":{"name":"Ojibwe","nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"},"om":{"name":"Oromo","nativeName":"Afaan Oromoo"},"or":{"name":"Oriya","nativeName":"ଓଡ଼ିଆ"},"os":{"name":"Ossetian","nativeName":"ирон æвзаг"},"pa":{"name":"Panjabi","nativeName":"ਪੰਜਾਬੀ"},"pi":{"name":"Pāli","nativeName":"पाऴि"},"pl":{"name":"Polish","nativeName":"język polski"},"ps":{"name":"Pashto","nativeName":"پښتو"},"pt":{"name":"Portuguese","nativeName":"Português"},"qu":{"name":"Quechua","nativeName":"Runa Simi"},"rm":{"name":"Romansh","nativeName":"rumantsch grischun"},"rn":{"name":"Kirundi","nativeName":"Ikirundi"},"ro":{"name":"Romanian","nativeName":"limba română"},"ru":{"name":"Russian","nativeName":"Русский"},"rw":{"name":"Kinyarwanda","nativeName":"Ikinyarwanda"},"sa":{"name":"Sanskrit","nativeName":"संस्कृतम्"},"sc":{"name":"Sardinian","nativeName":"sardu"},"sd":{"name":"Sindhi","nativeName":"सिन्धी"},"se":{"name":"Northern Sami","nativeName":"Davvisámegiella"},"sg":{"name":"Sango","nativeName":"yângâ tî sängö"},"si":{"name":"Sinhala","nativeName":"සිංහල"},"sk":{"name":"Slovak","nativeName":"slovenčina"},"sl":{"name":"Slovene","nativeName":"slovenski jezik"},"sm":{"name":"Samoan","nativeName":"gagana fa'a Samoa"},"sn":{"name":"Shona","nativeName":"chiShona"},"so":{"name":"Somali","nativeName":"Soomaaliga"},"sq":{"name":"Albanian","nativeName":"Shqip"},"sr":{"name":"Serbian","nativeName":"српски језик"},"ss":{"name":"Swati","nativeName":"SiSwati"},"st":{"name":"Southern Sotho","nativeName":"Sesotho"},"su":{"name":"Sundanese","nativeName":"Basa Sunda"},"sv":{"name":"Swedish","nativeName":"svenska"},"sw":{"name":"Swahili","nativeName":"Kiswahili"},"ta":{"name":"Tamil","nativeName":"தமிழ்"},"te":{"name":"Telugu","nativeName":"తెలుగు"},"tg":{"name":"Tajik","nativeName":"тоҷикӣ"},"th":{"name":"Thai","nativeName":"ไทย"},"ti":{"name":"Tigrinya","nativeName":"ትግርኛ"},"tk":{"name":"Turkmen","nativeName":"Türkmen"},"tl":{"name":"Tagalog","nativeName":"Wikang Tagalog"},"tn":{"name":"Tswana","nativeName":"Setswana"},"to":{"name":"Tonga","nativeName":"faka Tonga"},"tr":{"name":"Turkish","nativeName":"Türkçe"},"ts":{"name":"Tsonga","nativeName":"Xitsonga"},"tt":{"name":"Tatar","nativeName":"татар теле"},"tw":{"name":"Twi","nativeName":"Twi"},"ty":{"name":"Tahitian","nativeName":"Reo Tahiti"},"ug":{"name":"Uyghur","nativeName":"ئۇيغۇرچە‎"},"uk":{"name":"Ukrainian","nativeName":"Українська"},"ur":{"name":"Urdu","nativeName":"اردو"},"uz":{"name":"Uzbek","nativeName":"Ўзбек"},"ve":{"name":"Venda","nativeName":"Tshivenḓa"},"vi":{"name":"Vietnamese","nativeName":"Tiếng Việt"},"vo":{"name":"Volapük","nativeName":"Volapük"},"wa":{"name":"Walloon","nativeName":"walon"},"wo":{"name":"Wolof","nativeName":"Wollof"},"xh":{"name":"Xhosa","nativeName":"isiXhosa"},"yi":{"name":"Yiddish","nativeName":"ייִדיש"},"yo":{"name":"Yoruba","nativeName":"Yorùbá"},"za":{"name":"Zhuang","nativeName":"Saɯ cueŋƅ"},"zh":{"name":"Chinese","nativeName":"中文"},"zu":{"name":"Zulu","nativeName":"isiZulu"}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=i18n-iso-639-1.js.map