import { z } from 'zod';

export const MessageSchema = z.object({
    message: z.string({ required_error: "Message is required" }).min(1, "Message is required")
});
export type MessageSchemaType = z.infer<typeof MessageSchema>;

export const MessageSchemaInitData: MessageSchemaType = {
    message: ""
};
