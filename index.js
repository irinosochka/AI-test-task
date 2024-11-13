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
