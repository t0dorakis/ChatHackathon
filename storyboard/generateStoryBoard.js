const { generateImage } = require("../mw-open-ai");
const { generateScript } = require("./generateStoryBoardScript");

const generateStoryBoard = async (initialPrompt, mock = true) => {
  try {
    console.log("starting to retrieve screenplay");
    const screenPlayReturn = await generateScript(initialPrompt, mock);

    // if (!screenPlayReturn) {
    //   console.log("No screenplay returned");
    // } else {
    //   console.log("screenPlayReturn", screenPlayReturn);
    //   console.log("screenPlayReturn.scenes", screenPlayReturn.scenes);
    //   const anotherParse = await JSON.parse(screenPlayReturn);
    //   console.log("PRASEDscreenPlayReturn", anotherParse);
    //   console.log("PARSEDscreenPlayReturn.scenes", anotherParse.scenes);
    // }

    const characters = screenPlayReturn.characters;
    const scenes = screenPlayReturn.scenes;
    const mood = screenPlayReturn.mood;

    const createCharacterText = (array) => {
      return array
        .map((character) => {
          if (
            character.visualDescription === undefined ||
            character.visualDescription === null
          ) {
            return ``;
          }
          return `
      ${character.name}: ${character.visualDescription}`;
        })
        .join("\n");
    };

    const defaultStyleAddition = "cinematic, movie, film";

    const prompts = scenes.map((scene) => {
      const charactersInScene = scene.characters.map((character) => {
        const foundCharacter = characters.find(
          (element) => element.name === character
        );
        return foundCharacter;
      });

      const prompt = `${scene.plot}, ${scene.camera}, ${createCharacterText(
        charactersInScene
      )} Mood: ${mood}, ${defaultStyleAddition} `;
      return prompt;
    });

    const results = await Promise.all(
      prompts.map((prompt) => generateImage(prompt, 256, 1))
    );

    const enrichedResults = await results.map((result, index) => {
      return {
        image: result,
        prompt: prompts[index],
      };
    });
    console.log("enrichedResults", enrichedResults);
    return enrichedResults;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { generateStoryBoard };
