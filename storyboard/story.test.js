console.log("Story tests starting");

const screenPlayReturn = require("../data.mock/storyboard.mock/screenPlayReturn.mock.json");

const { generateStoryBoard } = require("./generateStoryBoard");

generateStoryBoard(screenPlayReturn);
