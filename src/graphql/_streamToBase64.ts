import { ReadStream } from "fs";

export const streamTo64 = (stream: ReadStream) => {
  return new Promise((resolve, reject) => {
    var chunks: any[] = [];

    stream.on("data", function (chunk: any) {
      chunks.push(chunk);
      //data += stream.read().toString("base64");
    });
    stream.on("end", function () {
      var result = Buffer.concat(chunks);
      resolve(result.toString("base64"));
    });
  });
};
