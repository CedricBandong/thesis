const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

if (process.env.VERCEL !== "1") {
  app.listen(port, () => {
    console.log(`Valentine app running on http://localhost:${port}`);
  });
}

module.exports = app;
