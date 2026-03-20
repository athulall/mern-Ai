import axios from "axios";
import { API_KEY } from "../Config/env.js";

export const askAI = async (message) => {

  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model:"openai/gpt-3.5-turbo",
      messages: [
        { role: "user", content: message }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:4000",
        "X-Title": "mern-chatbot"
      }
    }
  );

  return response.data.choices[0].message.content;
};