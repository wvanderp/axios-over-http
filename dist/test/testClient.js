"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
/* eslint-disable unicorn/prefer-top-level-await */
const client_1 = __importDefault(require("../client/client"));
(async () => {
    const axios = (0, client_1.default)('http://localhost:3000/axios');
    const response = await axios({
        url: 'https://baconipsum.com/api/?type=meat-and-filler',
        method: 'get'
    });
    console.log(response);
})();
//# sourceMappingURL=testClient.js.map