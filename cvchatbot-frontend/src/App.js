import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const handleSubmit = async () => {
    if(!prompt.trim()) return;
    try{
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setReply(data.reply);
    } catch(err) {
      setReply("Error while contacting chatbot");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-blue-600">Resume Chatbot</h1>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask something about me..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Ask
        </button>
        {reply && (
          <div className="bg-gray-100 p-4 rounded-lg text-gray-800">
            {reply}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
