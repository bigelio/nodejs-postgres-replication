const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app." });
});

const PORT = 4008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
