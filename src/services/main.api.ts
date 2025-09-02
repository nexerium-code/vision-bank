import API from '@/services/API';

const ENDPOINT = import.meta.env.VITE_BE_ENDPOINT;

export type ExampleType = {
    name: string;
    image: string;
};

export async function sendMessage(payload: object) {
    const response = await API.POST<ExampleType>(`${ENDPOINT}/chat`, payload);
    return response;
}
