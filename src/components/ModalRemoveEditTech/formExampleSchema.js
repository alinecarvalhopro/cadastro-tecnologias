import { z } from "zod";

export const formExampleSchema = z.object({
    status: z.string().min(1, "Selecione uma opção")
})