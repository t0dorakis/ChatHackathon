const express = require("express");
const axios = require("axios");
require("dotenv").config();
const { listEngines, generateImage } = require("./imageGeneration");

const app = express();

app.use(express.json()); // middleware to parse JSON body

app.post("/create-image", async (req, res) => {
  console.log("post called", req.body);
  try {
    const { prompt, pixel, number } = req.body;
    const response = await generateImage(prompt, pixel, number);
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

// const getImage = async () => {
//   const image = await generateImage();
//   console.log(image);
// };

// getImage();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
