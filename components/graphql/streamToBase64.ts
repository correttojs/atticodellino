export const streamTo64 = stream => {
  return new Promise((resolve, reject) => {
    var chunks = [];

    stream.on("data", function(chunk) {
      chunks.push(chunk);
      //data += stream.read().toString("base64");
    });
    stream.on("end", function() {
      var result = Buffer.concat(chunks);
      resolve(result.toString("base64"));
    });
  });
};
