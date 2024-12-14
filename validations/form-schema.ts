import { z } from "zod";

export const formSchema = z.object({
    name: z
        .string()
        .min(3, {
            message: "El nombre debe tener al menos 3 caracteres.",
        })
        .max(50, {
            message: "El nombre debe tener menos de 50 caracteres.",
        }),
    email: z.string().email({
        message: "Por favor, introduce un correo electrónico válido.",
    }),
    phone: z
        .number()
        .min(9, {
            message: "El teléfono debe tener al menos 9 caracteres.",
        })
        .max(9, {
            message: "El teléfono debe tener menos de 9 caracteres.",
        }),
    message: z
        .string()
        .min(10, {
            message: "El mensaje debe tener al menos 10 caracteres.",
        })
        .max(500, {
            message: "El mensaje debe tener menos de 500 caracteres.",
        }),
});
