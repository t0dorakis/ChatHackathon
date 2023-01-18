const { generateImage } = require("../mw-open-ai");

const generateStoryBoard = async (screenPlayReturn) => {
  const characters = screenPlayReturn.characters;
  const scenes = screenPlayReturn.scenes;
  const mood = screenPlayReturn.mood;

  const createCharacterText = (array) => {
    return array
      .map((character) => {
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

  try {
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
