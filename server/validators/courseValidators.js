import { z } from "zod";

export const courseValidator = z.object({
  name: z.string().min(3),
});
