const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
    console.error("Nie znaleziono klucza API OpenAI.");
    process.exit(1);
}

function readArticle(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        console.error("Wczytanie pliku nie powiodło się.");
        process.exit(1);
    }
}

const articleText = readArticle('artykul.txt');

const prompt = ` 
The following is an article in Polish. Your task is to convert this article into an HTML structure. Please ensure the following:
1. Use appropriate HTML tags to structure the content, such as <h1>, <h2>, <p>, etc., depending on the content hierarchy.
2. Indicate where images should be added by using the <img> tag with the attribute src="image_placeholder.jpg". Include the alt attribute with a detailed prompt that can be used to generate the image.
3. Add captions under images using the <figcaption> tag.

Do not include <html>, <head>, or <body> tags. Focus only on the content that should go between <body> and </body> tags in the HTML file.

Article Text:  
${articleText}

Please process this article and generate the HTML accordingly.
`;
