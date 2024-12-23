import express, { Request, Response } from 'express';
import axios from 'axios';
import printRequest from './printRequest';
import { AxiosReturnType } from '../types/AxiosReturnType';

/**
 * a express endpoint that receives a axios config in a post request
 * and then makes the axios request and returns the response or error
 *
 * @param {Request} req express request
 * @param {Response} res express response
 * @example
 *    app.use('/axios', axiosOverHttpEndpoint);
 */
async function axiosOverHttpEndpoint(req: Request, res: Response) {
    printRequest(req);

    try {
        const request = await axios(req.body);

        res.send({
            data: request.data,
            status: request.status,
            statusText: request.statusText,
            headers: request.headers,
            config: request.config,
        } as AxiosReturnType);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            res.send({
                config: error.config,
                code: error.code,
            });
            return;
        }

        throw error;
    }
}

const router = express.Router();

router.use(express.json());
router.post('/', axiosOverHttpEndpoint);

export default router;
