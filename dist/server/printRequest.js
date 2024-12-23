"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = printRequest;
/**
 * this function prints the request to the console
 *
 * @param {Request} req - the express request object
 * @example
 * printRequest(req);
 */
function printRequest(req) {
    console.log(new Date().toISOString());
    console.log({
        body: req.body,
        headers: req.headers,
        method: req.method,
        url: req.url,
    });
}
//# sourceMappingURL=printRequest.js.map