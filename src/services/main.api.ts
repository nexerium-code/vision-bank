const ENDPOINT = import.meta.env.VITE_BE_ENDPOINT;

export async function sendMessage(message: string, isNewChat: boolean, onChunk: (content: string) => void, onComplete: () => void, onError: (error: Error) => void) {
    try {
        const response = await fetch(`${ENDPOINT}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message, isNewChat })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) {
            throw new Error("No response body reader available");
        }

        while (true) {
            const { done, value } = await reader.read();

            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split("\n");

            for (const line of lines) {
                if (line.startsWith("data: ")) {
                    const data = line.slice(6);

                    if (data === "[DONE]") {
                        onComplete();
                        return;
                    }

                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.content) {
                            onChunk(parsed.content);
                        }
                    } catch (_e) {
                        // Skip invalid JSON
                        continue;
                    }
                }
            }
        }

        onComplete();
    } catch (error) {
        onError(error instanceof Error ? error : new Error("Unknown error occurred"));
    }
}
