import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,

// });
// console.log(openai)
const apiKey = process.env.OPENAI_API_KEY
console.log(apiKey);

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: apiKey,
  defaultHeaders: {
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
  },
});
export const OpenAIService = {

  async generateMessage(role: string, skills: string, company: string, tone: "FORMAL" | "CASUAL" | "ENTHUSIASTIC", others: string) {
    const prompt = `Write a ${tone.toLowerCase()} email and LinkedIn message for a candidate applying for a ${role} role at ${company}. 
    The candidate has the following skills: ${skills}. ${others}`;
    try {
      const response =  await openai.chat.completions.create({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            "role": "user",
            "content": prompt
          }
        ],
        
      });
      
      
       
      const resp_message = response.choices[0].message
        
      console.log(resp_message);  

      
      return { emailText : "x", linkedInText : "y" };
      
      
    } catch (error) {
      console.error("OpenAI API error:", error);         
      throw new Error("Failed to generate message");
    }
  },
};
