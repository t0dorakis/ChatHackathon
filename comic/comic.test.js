console.log("Comic tests starting");

const screenPlayReturn = require("../data.mock/storyboard.mock/screenPlayReturn.mock.json");

const { generateComic } = require("./miw-generate-comic");

const mockChapters = require('./request-mock.json');

generateComic(mockChapters);
