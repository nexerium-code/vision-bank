import axios, { AxiosError, AxiosRequestConfig } from 'axios';

axios.defaults.withCredentials = false;

function errorHandler(error: unknown) {
    if (error instanceof AxiosError) return new Error(error?.response?.data?.response);
    if (error instanceof Error) return new Error(error.message);
    return new Error("service-unavailable");
}

export default {
    async GET<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = (await axios.get(url, config)).data;
            return response;
        } catch (err) {
            throw errorHandler(err);
        }
    },
    async POST<T = unknown>(url: string, data: object, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = (await axios.post(url, data, config)).data;
            return response;
        } catch (err) {
            throw errorHandler(err);
        }
    },
    async PATCH<T = unknown>(url: string, data?: object): Promise<T> {
        try {
            const response = (await axios.patch(url, data)).data;
            return response;
        } catch (err) {
            throw errorHandler(err);
        }
    },
    async PUT<T = unknown>(url: string, data: object): Promise<T> {
        try {
            const response = (await axios.put(url, data)).data;
            return response;
        } catch (err) {
            throw errorHandler(err);
        }
    },
    async DELETE<T = unknown>(url: string): Promise<T> {
        try {
            const response = (await axios.delete(url)).data;
            return response;
        } catch (err) {
            throw errorHandler(err);
        }
    }
};
