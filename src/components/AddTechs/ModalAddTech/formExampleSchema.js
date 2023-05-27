import { z } from "zod";

export const formExampleSchema = z.object({
    title: z.string().min(1, "O nome é obrigatório"),
    status: z.string().min(1, "Selecione uma opção")
})