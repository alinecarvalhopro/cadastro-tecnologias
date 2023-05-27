import { z } from "zod";

export const formExampleSchema = z.object({
    email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um e-mail válido."),
    password: z.string().min(8, "A senha precisa conter pelo menos 8 caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos 1 letra maiúscula.")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos 1 letra minúscula.")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos 1 número")
    .regex(/(?=.?[`!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?~*])/, "Pelo menos um caracter especial"),
    confirm: z.string().min(1, "Confirmar a senha é obrigatório."),
    name: z.string().min(1, "O nome é obrigatório"),
    bio: z.string().min(1, "Campo obrigatório"),
    contact: z.string().min(1, "Campo obrigatório"),
    course_module: z.string().min(1, "Selecione uma opção")
    }).refine(({password, confirm}) => password === confirm, {
        message: "As senhas não correspondem",
        path: ["confirm"], 
    })