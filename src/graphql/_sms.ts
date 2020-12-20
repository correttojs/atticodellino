import fetch from "node-fetch";
import { getLangByPhone } from "./_lang";

const MESSAGES = {
  registrationLink: (link: string) => ({
    it: `Benvenuto/a all'attico del Lino. Registrati per ricevere codice di entrata, video e istruzioni: ${link}`,
    en: `Welcome to Attico del Lino. Register to get the entry code, video and self-checkin instructions: ${link}`,
  }),
  confirm: (link: string, code: string) => ({
    it: `Codice di entrata: "${code}". Istruzioni: ${link}`,
    en: `Entry code: "${code}". Self-checkin instructions: ${link}`,
  }),
  reminder: {
    it: `Ricorda: Checkout e tassa turistica`,
    en: `Reminder: checkout and tourist tax`,
  },
};

export const sendSms = (
  recipient: string,
  message: string,
  schedule?: string
) => {
  console.log(recipient, message, parseInt(schedule?.replace(/-/g, "")));
  return Promise.resolve();

  // return fetch("https://api.trendoo.net/API/v1.0/REST/sms", {
  //   method: "POST",
  //   headers: {
  //     user_key: process.env.TRENDOO_ID,
  //     Access_token: process.env.TRENDOO_PWD,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     message_type: "GP",
  //     message: message,
  //     recipient: [recipient],
  //     sender: "Attico del Lino",
  //     // scheduled_delivery_time: 20201219102310,
  //     order_id: "123456789",
  //     returnCredits: true,
  //   }),
  // })
  //   .then((r) => r.json())
  //   .then((r) => console.log(r));
};

export const smsRegisterLink = (phone: string, link: string) => {
  return sendSms(phone, MESSAGES.registrationLink(link)[getLangByPhone(phone)]);
};

export const smsConfirmLink = (phone: string, link: string, code: string) => {
  return sendSms(phone, MESSAGES.confirm(link, code)[getLangByPhone(phone)]);
};

export const smsReminderLink = (phone: string, schedule: string) => {
  return sendSms(phone, MESSAGES.reminder[getLangByPhone(phone)], schedule);
};
