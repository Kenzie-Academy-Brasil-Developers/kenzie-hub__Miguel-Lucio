import { z } from "zod";

export const createTechFormSchema = z.object({
  title: z.string().nonempty("É necessário informar a Teclogia"),
  status: z.string().nonempty("É necessário informar o status"),
});
