const {generateText } = require("../mw-open-ai");
const {generateComic} = require("./miw-generate-comic");

const prompt = "Generate a story in comic style about a spider and a cat in several chapters. The cat is called \"Kitty Kat\" and the spider is called \"Spinni\". They are adventorous and funny on a trip to a town. Decide for an interesting town.  Use this json format looking like this schema:\n\n{\n  \"story\": [\n    {\n        \"title\": \"the title chapter 1\",\n        \"summary\": \"visual summarization of the scene\",\n        \"description\": \"the scene text\"\n     },\n    {\n        \"title\": \"the title chapter 2\",\n        \"summary\": \"visual summarization of the scene\",\n        \"description\": \"the scene text\"\n     }\n  ]\n}\n";

const story = generateText(prompt)
                .then((response) => {
                    console.log(response);
                    let imageRequest = JSON.parse(response.replace(/\n/g, ''));
                    
                    generateComic(imageRequest.story);
                });