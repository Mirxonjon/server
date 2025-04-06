const express = require("express");
const path = require("path");
const app = express();
const PORT = 9900;

app.use(express.static(path.join(__dirname, "public")));

app.get("/pdf", (req, res) => {
  const filePath = path.join(__dirname, "public", "file.pdf");
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server ishga tushdi: http://localhost:${PORT}`);
});
