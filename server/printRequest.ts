/* eslint-disable no-console */
import { Request } from 'express';

/**
 * this function prints the request to the console
 *
 * @param {Request} req - the express request object
 * @example
 * printRequest(req);
 */
export default function printRequest(req: Request) {
    console.log(new Date().toISOString());
    console.log({
        body: req.body,
        headers: req.headers,
        method: req.method,
        url: req.url,
    });
}
