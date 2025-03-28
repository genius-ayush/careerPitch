import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,

// });
// console.log(openai)
const apiKey = process.env.OPENAI_API_KEY

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
      const response = await openai.chat.completions.create({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            "role": "user",
            "content": prompt
          }
        ],

      });



      const resp_message = response.choices[0].message.content
      const emailRegex = /(?:Subject:.*?)\n\n([\s\S]*?)(?=\n\n(?:Subject:|Hello|Best regards|Thank you|---|$))/;
      const linkedInRegex = /(?:LinkedIn Message:|LinkedIn DM:|Hi [^\n]+,|Hello [^\n]+,)\s*\n([\s\S]+?)(?=\n(?:Best regards|Thank you|Sincerely|Warm regards|---|$))/;


      const emailMatch = resp_message?.match(emailRegex);
      const linkedInMatch = resp_message?.match(linkedInRegex);

      const emailText = emailMatch ? emailMatch[1].trim() : "Email content not found";
      const linkedInText = linkedInMatch ? linkedInMatch[1].trim() : "LinkedIn message not found";

       
      return {  emailText, linkedInText };


    } catch (error) {
      console.error("OpenAI API error:", error);
      throw new Error("Failed to generate message");
    }
  },
};
