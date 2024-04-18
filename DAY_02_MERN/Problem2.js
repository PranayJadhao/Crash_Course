const fs = require("fs");

function readFiles(filePaths, callback) {
  let aggregatedData = [];
  let count = 0;

  filePaths.forEach((filePath) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        callback(err);
        return;
      }
      aggregatedData.push(data);
      count++;

      if (count === filePaths.length) {
        callback(null, aggregatedData);
      }
    });
  });
}

const filePaths = ["file1.txt", "file2.txt", "file3.txt"];

readFiles(filePaths, (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Aggregated data:", data);
});
