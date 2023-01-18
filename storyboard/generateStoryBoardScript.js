const { config } = require("dotenv");
const { generateText } = require("../mw-open-ai");
const { ChatPromptAdditions } = require("./PromptEnums");
const fs = require("fs");

const generateScript = async (userPrompt, mock) => {
  const prompt = `${userPrompt} ${ChatPromptAdditions.Instructions} ${ChatPromptAdditions.Schema}`;
  console.log("starting script retrieve");

  if (mock) {
    console.log("mocking");
    try {
      const mockResponse = await fs.readFileSync(
        "./data.mock/storyboard.mock/dirtyResponse.mock",
        "utf8"
      );

      const parsedMockResponse = await JSON.parse(mockResponse);
      return parsedMockResponse;
    } catch (e) {
      console.log("Error:", e.stack);
    }
  } else {
    try {
      const config = {
        temperature: 0.9,
        max_tokens: 1000,
        model: "text-davinci-003",
      };
      const response = await generateText(prompt, config);

      console.log("response: ", response);

      const cleanedResponse = response.replace(/\n/g, "");
      console.log("//////", cleanedResponse);

      // const stringifiedResponse = await JSON.stringify(response);
      // console.log("stringifyResponse", stringifiedResponse);
      const parsedResponse = await JSON.parse(cleanedResponse);
      // console.log("parsedResponse", parsedResponse);

      return parsedResponse;
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = { generateScript };
