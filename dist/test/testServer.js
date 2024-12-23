"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("../server/server"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/axios', server_1.default);
app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=testServer.js.map