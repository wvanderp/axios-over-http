/* eslint-disable no-console */
import { Request } from 'express';

/**
 * this function prints the request to the console
 *
 * @param req the express request object
 * @example
 */
export default function printRequest(req: Request) {
    // the time
    console.log(new Date().toISOString());
    console.log({
        body: req.body,
        headers: req.headers,
        method: req.method,
        url: req.url,
    });
}
