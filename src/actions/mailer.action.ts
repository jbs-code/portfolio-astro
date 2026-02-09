import { defineAction } from "astro:actions";
import { sendMail } from "../utils/nodemailer/config";
import { z } from "astro/zod";

export const mailer = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email(),
    subject: z.string(),
    message: z.string()
  }),
  handler: async (input) => {
    const response = await sendMail(input);
    
    return response;
  },
});
