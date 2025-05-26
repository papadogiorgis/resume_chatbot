// index.js
// Papadakis Georgios (May of 2025)

const express = require('express');
const cors = require('cors');
const responses = require('./responses.json');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) => {
    const userPrompt = req.body.prompt.toLowerCase();
    const match = responses.find(item =>
        item.keywords.some(keyword => userPrompt.includes(keyword))
    );
    const answer = match ? match.response : "I couldn't understand the question. Ask something else.";
    res.json({reply: answer});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Chatbot server running on port ${PORT}`);
});