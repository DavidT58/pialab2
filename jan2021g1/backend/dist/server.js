"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_router_1 = __importDefault(require("./routes/user.router"));
const proizvod_router_1 = __importDefault(require("./routes/proizvod.router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://root:example@127.0.0.1:27017/palacinkarnica2021?authSource=admin');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('db ok');
});
const router = express_1.default.Router();
router.use('/users', user_router_1.default);
router.use('/proizvodi', proizvod_router_1.default);
app.use('/', router);
app.listen(4000, () => console.log('Express running on http://localhost:4000'));
//# sourceMappingURL=server.js.map