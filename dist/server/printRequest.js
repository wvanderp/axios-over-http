"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * this function prints the request to the console
 *
 * @param req the express request object
 * @example
 */
function printRequest(req) {
    // the time
    console.log(new Date().toISOString());
    console.log({
        body: req.body,
        headers: req.headers,
        method: req.method,
        url: req.url,
    });
}
exports.default = printRequest;
