import fetch from "node-fetch";

export const sendSms = () => {
  return fetch("https://api.trendoo.net/API/v1.0/REST/sms", {
    method: "POST",
    headers: {
      user_key: process.env.TRENDOO_ID,
      Access_token: process.env.TRENDOO_PWD,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message_type: "GP",
      message: "Hello world!",
      recipient: ["+393477594114"],
      sender: "Attico del Lino",
      scheduled_delivery_time: 20201219102310,
      order_id: "123456789",
      returnCredits: true,
    }),
  })
    .then((r) => r.json())
    .then((r) => console.log(r));
};
