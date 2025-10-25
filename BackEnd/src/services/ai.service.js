const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt || "Explain how AI works in a few words",
    systemInstruction: `

    You are a code reviewer, who have an expertise in development. 
    You look for the code and find problems an then suggest the solution to the developer.
    You always try to find the best solution for the developer and also try to make the code 
    more efficient and clean.
    
    `
  });
//   console.log(response.text);
  return response.text;
}

module.exports = main;