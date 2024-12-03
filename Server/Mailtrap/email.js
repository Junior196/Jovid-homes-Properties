import { formEmailTemplate } from "./emailTemplate.js";
import { mainClient, mailSender } from "./mailtrap.config.js";
import env from "dotenv";
env.config();
export const sendFormFilledEmail = async (formData) => {
  console.log(formData);
  const email = process.env.RECEIVER_EMAIL;
  console.log("Receiver Email:", email);
  const recipients = [{ email }];
  try {
    const res = mainClient.send({
      from: mailSender,
      to: recipients,
      subject: "Email form got filled on page :" + formData.page,
      html: formEmailTemplate(formData),
    });
    return res;
  } catch (error) {
    console.log("Error while sending email out : " + error.message);
  }
};
