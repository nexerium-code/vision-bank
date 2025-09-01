import { z } from 'zod';

import { ExampleTypes } from '@/lib/enums';

export const ExampleSchema = z.object({
    team: z.enum(Object.values(ExampleTypes) as [string, ...string[]], { required_error: "type-not-specified", message: "type-not-specified" })
});
export type ExampleSchemaType = z.infer<typeof ExampleSchema>;

export const ExampleSchemaInitData: ExampleSchemaType = {
    team: "FALCONS"
};
