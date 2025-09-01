import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import { exampleFunction as exampleFunctionAPI, ExampleType } from '@/services/main.api';
import { useMutation } from '@tanstack/react-query';

export function useExampleHook(successCallBack: (response: ExampleType) => void) {
    const { t } = useTranslation();

    const {
        mutate: exampleFunction,
        isPending: loading,
        isSuccess: success,
        isError,
        reset
    } = useMutation({
        mutationFn: ({ payload }: { payload: FormData }) => exampleFunctionAPI(payload),
        onSuccess: (response) => {
            console.log("🚀 ~ response:", response);
            successCallBack(response);
        },
        onError: (error) => {
            toast.error(t(error.message || "something-went-wrong-please-try-again-later"));
        },
        onSettled: () => {
            reset();
        }
    });

    return { exampleFunction, loading, success, isError, reset };
}
