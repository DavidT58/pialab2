"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let kor_ime = req.body.kor_ime;
            let lozinka = req.body.lozinka;
            let tip = req.body.tip;
            user_1.default.findOne({ 'kor_ime': kor_ime, 'lozinka': lozinka, 'tip': tip }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map