import API from '@/services/API';

const ENDPOINT = import.meta.env.VITE_BE_ENDPOINT;

export type ExampleType = {
    name: string;
    image: string;
};

export async function exampleFunction(payload: FormData) {
    const response = await API.POST<ExampleType>(ENDPOINT, payload);
    return response;
}
