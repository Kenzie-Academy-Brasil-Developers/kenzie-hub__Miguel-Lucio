import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z
      .string()
      .nonempty("O campo email é obrigatório")
      .email("Forneça um e-mail válido"),
    password: z
      .string()
      .nonempty("O campo senha é obrigatório")
      .min(8, "Mínimo de (8) oito caracteres")
      .regex(/[A-Z]+/, "Obrigatório conter uma letra maiúscula")
      .regex(/[a-z]+/, "Obrigatório conter uma letra misúcula")
      .regex(/[0-9]+/, "Obrigatório conter um número"),
    confirm_password: z.string().nonempty("Confirme sua senha"),
    bio: z.string().nonempty("O campo bio é obrigatório"),
    contact: z.string().nonempty("O campo contato é obrigatório"),
    course_module: z.string().nonempty("O campo módulo é obrigatório"),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "As senhas não correspondem",
    path: ["confirm_password"],
  });
