import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();
const token = process.env.MAIL_TRAP_TOKEN;
const endPoint = process.env.MAIL_TRAP_END_POINT;

export const mainClient = new MailtrapClient({
  endpoint: endPoint,
  token: token,
});
export const mailSender = {
  email: "mailtrap@demomailtrap.com",
  name: "Jovid Homes",
};
