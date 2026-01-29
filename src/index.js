// index.js
const express = require("express");
const app = express();

// Optional: parse JSON bodies
app.use(express.json());

// A simple test route
app.get("/", (req, res) => {
  res.send("Hello, Render! Your Express app is running.");
});

// Use the port Render provides, or 3000 locally
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
