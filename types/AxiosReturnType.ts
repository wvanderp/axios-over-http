import { AxiosRequestConfig } from 'axios';

export interface AxiosReturnType<D = unknown> {
    data: D;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: AxiosRequestConfig;
}
