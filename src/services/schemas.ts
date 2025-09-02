import { z } from 'zod';

export const MessageSchema = z.object({
    message: z.string({ required_error: "Message is required" }).max(12, "Message must be at most 12 characters").nonempty("Message is required")
});
export type MessageSchemaType = z.infer<typeof MessageSchema>;

export const MessageSchemaInitData: MessageSchemaType = {
    message: ""
};
