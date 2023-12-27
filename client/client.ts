import axios, { AxiosRequestConfig } from 'axios';
import { AxiosReturnType } from '../types/AxiosReturnType';

/**
 * a partial axios client that sends the axios config to a server for the server to make the request
 *
 * @param {string} serverUrl the url with the server part of axios-over-http
 * @param {AxiosRequestConfig} axiosConfig standard axios config
 * @returns {Promise<AxiosReturnType>} the response from the server
 *
 * @example
 *     const response = await axiosOverHttp(
 *         'http://localhost:3000/axios',
 *         {
 *             method: 'get',
 *             url: 'https://example.com',
 *         }
 *     );
 *
 *     console.log(response.data);
 */
export default async function axiosOverHttp<D = unknown>(
    serverUrl: string,
    axiosConfig: AxiosRequestConfig
): Promise<AxiosReturnType<D>> {
    const response = await axios.post(
        serverUrl,
        axiosConfig,
        {}
    );

    return response.data;
}
