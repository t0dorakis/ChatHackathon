const ChatPromptAdditions = {
  Schema: `
  {
    "characters": [{
        "name": "name of character",
        "visualDescription": "visual description of character"
    }],
    "mood": "visual mood of the movie",
    "scenes": [
        {
            "scene": "visual description of the scenery",
            "camera": "camera point of view and color grading of the scene",
            "plot": "plot of the scene",
            "characters": [...]
        },
    ]
  }`,
  Instructions: `
    At first, list all contained characters and their visual characteristics.
    Secondly, summarise the overall cinematographic mood in a couple of keywords.
    After this output the screenplay without dialogue in a sequence of scenes.

    Everything shall be in JSON format without trailing commas, following the schema:
    \n
  `,
};

module.exports = { ChatPromptAdditions };
