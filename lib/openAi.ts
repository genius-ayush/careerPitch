import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,

// });
// console.log(openai)
const apiKey = process.env.OPENAI_API_KEY
console.log(apiKey);
export const OpenAIService = {

  async generateMessage(role: string, skills: string, company: string, tone: "FORMAL" | "CASUAL" | "ENTHUSIASTIC", others: string) {
    const prompt = `Write a ${tone.toLowerCase()} email and LinkedIn message for a candidate applying for a ${role} role at ${company}. 
    The candidate has the following skills: ${skills}. ${others}`;
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + apiKey,
          "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
          "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-r1:free",
          "messages": [
            {
              "role": "device",
              "content": prompt
            }
          ]
        })
      });
      // const result = response.choices[0]?.message?.content ?? "Error generating message";
      // const [emailText, linkedInText] = result.split("\n\n");
      const data =  await response.json()
      console.log("data "  + data);
      const markdownText = data.choices?.[0]?.message?.content || 'No response received.';
      console.log(markdownText)
      return { emailText : "x", linkedInText : "y" };
      
      
    } catch (error) {
      console.error("OpenAI API error:", error);
      throw new Error("Failed to generate message");
    }
  },
};
