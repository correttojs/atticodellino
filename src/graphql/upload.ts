import fetch from "node-fetch";
import * as fs from "fs";

var FormData = require("form-data");

export const upload = async (fileStream: fs.ReadStream) => {
  var form = new FormData();
  form.append("fileUpload", fileStream);

  try {
    const res = await fetch(
      `https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master/upload`,
      {
        method: "POST",
        body: form,
        headers: {
          Authorization: `Bearer ${process.env.GQL_CMS_TOKEN}`,
        },
      }
    ).then((r) => r.json());

    return res.url;
  } catch (e) {
    console.log(e);
  }
};