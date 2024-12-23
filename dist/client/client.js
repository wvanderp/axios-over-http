"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = axiosOverHttp;
const axios_1 = __importDefault(require("axios"));
/**
 * a partial axios client that sends the axios config to a server for the server to make the request
 *
 * @param {string} serverUrl the url with the server part of axios-over-http
 * @returns {AxiosInstance} a instance of axios that sends the axios config to a server for the server to make the request
 *
 * @example
 *     const axios = axiosOverHttp('http://localhost:3000/axios');
 *     const response = await axios(
 *         {
 *             method: 'get',
 *             url: 'https://example.com',
 *         }
 *     );
 *
 *     console.log(response.data);
 */
function axiosOverHttp(serverUrl) {
    // @ts-expect-error a little white lie for now
    return async (axiosConfig) => {
        const response = await axios_1.default.post(serverUrl, axiosConfig, {});
        return response.data;
    };
}
