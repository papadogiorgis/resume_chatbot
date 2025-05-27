# Resume Chatbot

A simple AI-like chatbot web application that responds to user prompts related to the resume of **Georgios Papadakis**. It works like an interview by understanding user questions (via keyword detection) and replying with predefined answers.

---

## Technologies Used

- **Frontend**: React + TailwindCSS
- **Backend**: Node.js + Express
- **Data**: JSON file with keyword-to-response mappings
- **Tools**: Git

---

## How it works

1. The frontend presents a clean UI with a prompt input and a response box.
2. When the user submits a question, it is sent to the backend via a `POST /chat` request.
3. The backend detects keywords in the prompt and returns the correct response from a predefined set.
4. The chatbot displayes the response dynamically.

---

## Running the Project Locally

1. Clone the repository.
2. cd resume_chatbot
3. npm install
4. node index.js (The Backend: it will run on http://localhost:3000)
5. **IN A NEW TERMINAL:**
6. cd resume_chatbot/cvchatbot-frontend/
7. npm install
8. npm start (The Frontend: it will open at http://localhost:3001)

---

## Example Prompts

1. "Tell me something about yourself"
2. "What projects have you worked on?"
3. "What are your skills?"
4. "Where do you study?"
5. "What are your hobbies?"
6. "Have you done any volunteering?"
7. "Which high school did you graduate from?"
8. "What languages do you speak?"
9. "What are your personal attributes?"
10. "What football team do you support?"

## License & Usage Notice
This repository is **not open source**.
All content is published solely for portfolio and demonstration purposes.
**Copying, reusing, modifying, or redistributing any part of this code is strictly prohibited**,
unless explicit written permission is granted by the author.

## Contact
[linktree](https://linktr.ee/papadogiorgis)
