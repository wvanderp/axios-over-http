"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const printRequest_1 = __importDefault(require("./printRequest"));
/**
 * a express endpoint that receives a axios config in a post request
 * and then makes the axios request and returns the response or error
 *
 * @param {Request} req express request
 * @param {Response} res express response
 * @example
 *    app.use('/axios', axiosOverHttpEndpoint);
 */
async function axiosOverHttpEndpoint(req, res) {
    (0, printRequest_1.default)(req);
    try {
        const request = await (0, axios_1.default)(req.body);
        res.send({
            data: request.data,
            status: request.status,
            statusText: request.statusText,
            headers: request.headers,
            config: request.config,
        });
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            res.send({
                config: error.config,
                code: error.code,
            });
            return;
        }
        throw error;
    }
}
const router = express_1.default.Router();
router.use(express_1.default.json());
router.post('/', axiosOverHttpEndpoint);
exports.default = router;
