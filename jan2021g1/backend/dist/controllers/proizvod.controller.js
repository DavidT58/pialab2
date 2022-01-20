"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProizvodController = void 0;
const proizvod_1 = __importDefault(require("../models/proizvod"));
class ProizvodController {
    constructor() {
        this.dohvatiSveProizvode = (req, res) => {
            proizvod_1.default.find({}, (err, proizvodi) => {
                if (err)
                    console.log(err);
                else
                    res.json(proizvodi);
            });
        };
    }
}
exports.ProizvodController = ProizvodController;
//# sourceMappingURL=proizvod.controller.js.map