const initialPrompt = require("../data.mock/storyboard.mock/initialPrompt.mock.json");
const screenPlayReturn = require("../data.mock/storyboard.mock/screenPlayReturn.mock.json");

const { generateStoryBoard } = require("./generateStoryBoard");
const { generateScript } = require("./generateStoryBoardScript");

// generateScript(initialPrompt.prompt);
generateStoryBoard(initialPrompt.prompt);
