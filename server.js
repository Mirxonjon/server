const express = require("express");
const path = require("path");
const app = express();
const PORT = 9900;

app.use(express.static(path.join(__dirname, "public")));

app.get("/get-document/6019-3167-f0f4-4af0", (req, res) => {
  const filePath = path.join(__dirname, "public", "file.pdf");
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server ishga tushdi: http://localhost:${PORT}`);
});
