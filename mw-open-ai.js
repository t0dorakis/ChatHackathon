const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANISATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const listEngines = async () => {
  const response = await openai.listEngines();
  return response;
};

const generateImage = async (
  prompt = "a white siamese cat",
  pixel = 256,
  number = 1
) => {
  console.log("Generating image ...")
  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: number,
      size: `${pixel}x${pixel}`,
    });
    const image_url = response.data.data[0].url;
    return image_url;
  } catch (err) {
    console.log(err);
  }
};

const generateText = async (
  prompt = "a white siamese cat",
  pixel = 256,
  number = 1
) => {
  console.log("Generating text ...")
  try {
    const response = await openai.generateText({
      prompt: prompt,
      

    )
      ;
    const image_url = response.data.data[0].url;
    return image_url;
  } catch (err) {
    console.log(err);
  }
};


module.exports = { listEngines, generateImage, generateText };
