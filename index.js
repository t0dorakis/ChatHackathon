const express = require("express");
const axios = require("axios");
require("dotenv").config();
const { listEngines, generateImage, generateText } = require("./mw-open-ai");
const { generateStoryBoard } = require("./storyboard/generateStoryBoard");

const app = express();

app.use(express.json()); // middleware to parse JSON body

app.get("/create-image", async (req, res) => {
  console.log("create-image request", req.body);
  try {
    const { prompt, pixel, number } = req.body;
    const response = await generateImage(prompt, pixel, number);
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/complete-text", async (req, res) => {
  console.log("complete-text request", req.body);
  try {
    const { prompt } = req.body;
    const response = await generateText(prompt);
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/create-story-board", async (req, res) => {
  console.log("createStoryBoard request", req.body);
  try {
    const { prompt, mock } = req.body;
    const response = await generateStoryBoard(prompt, mock);
    res.send(response);
  } catch (err) {
    res.status;
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
