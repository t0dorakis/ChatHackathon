const { generateImage } = require("../mw-open-ai");
const fs = require('fs');
const Downloader = require("nodejs-file-downloader");

const style = "50ies comic style in black and white handdrawn";

const generateComic = async (story) => {
    console.log(story);
    requestImagePrompts = story.map((chapter) => { return `${chapter.summary} ${style}` });
    const files = await Promise.all(
        requestImagePrompts.map((imagePrompt) => generateImage(imagePrompt, 256, 1))
    );

    files.forEach((url, index) => {
        story[index].image = `${index}.png`;
        image = download(url, `${index}.png`);
    });
    
    fs.writeFileSync('./comic/result/comic.json', JSON.stringify(story));

}

const download = async (url, filename, index) => {
    const downloader = new Downloader({
      url: url,
      directory: './comic/result',
        fileName: filename
    });
  
    try {
      await downloader.download();
    } catch (error) {
      console.log(error);
    }
};

module.exports = { generateComic };