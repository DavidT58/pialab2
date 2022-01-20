"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const proizvod_controller_1 = require("../controllers/proizvod.controller");
const proizvodRouter = express_1.default.Router();
proizvodRouter.route('/dohvatiSveProizvode').get((req, res) => new proizvod_controller_1.ProizvodController().dohvatiSveProizvode(req, res));
exports.default = proizvodRouter;
//# sourceMappingURL=proizvod.router.js.map