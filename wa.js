const fetch = require("node-fetch");
fetch("https://api.trendoo.net/API/v1.0/REST/sms", {
  method: "POST",
  headers: {
    user_key: "18866",
    Access_token: "dee3d72aaa101b346c96ce9794608d91",
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
