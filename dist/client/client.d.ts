import { AxiosInstance } from 'axios';
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
export default function axiosOverHttp<D = unknown>(serverUrl: string): AxiosInstance;
//# sourceMappingURL=client.d.ts.map