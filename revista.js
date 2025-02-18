"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Revista = void 0;
var articulo_1 = require("./articulo");
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(pNombre, pAutor, pPrecio, pNumero, pAño) {
        var _this = _super.call(this, pNombre, pAutor, pPrecio) || this;
        _this.numero = pNumero;
        _this.año = pAño;
        return _this;
    }
    Revista.prototype.setNumero = function (pNumero) {
        this.numero = pNumero;
    };
    Revista.prototype.getNumero = function () {
        return this.numero;
    };
    Revista.prototype.setAño = function (pAño) {
        this.año = pAño;
    };
    Revista.prototype.getAño = function () {
        return this.año;
    };
    return Revista;
}(articulo_1.Articulo));
exports.Revista = Revista;
