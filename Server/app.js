import e from "express";
import env from "dotenv";
import { sendFormFilledEmail } from "./Mailtrap/email.js";
import cors from "cors";
env.config();
const server = e();
server.use(e.json());
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;
server.use(
  cors({
    origin: CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
server.post("/send-email", async (req, res) => {
  const { formData } = req.body;
  console.log(formData);
  const resFromMail = await sendFormFilledEmail(formData);
  console.log(resFromMail);
  if (resFromMail.success === true) {
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } else {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
server.get("/", (req, res) => {
  res.send("Jovid Homes");
});
server.listen(PORT, () => {
  console.log("Server is listening at port " + PORT);
});
//Made By Muhammad Hamza Younis  https://github.com/hamzayounis106
