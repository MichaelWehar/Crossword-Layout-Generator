// server.js
const express = require('express');
const fetch = require('node-fetch'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/generate-clue', async (req, res) => {
  const word = req.body.word;

  if (!word) {
    return res.status(400).json({ error: 'Word is required' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You are a helpful assistant that creates concise crossword clues for given words.',
          },
          { role: 'user', content: `Provide a concise crossword clue for the word "${word}".` },
        ],
        max_tokens: 15,
        temperature: 0.7,
        n: 1,
        stop: ['\n'],
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const clue = data.choices[0].message.content.trim();
    res.json({ clue });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while generating the clue' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
