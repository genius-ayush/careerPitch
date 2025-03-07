import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const OpenAIService = {

  async generateMessage(role: string, skills: string, company: string, tone: "FORMAL" | "CASUAL" | "ENTHUSIASTIC") {
    const prompt = `Write a ${tone.toLowerCase()} email and LinkedIn message for a candidate applying for a ${role} role at ${company}. 
    The candidate has the following skills: ${skills}.`;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "system", content: prompt }],
        max_tokens: 500,
      });

      const result = response.choices[0]?.message?.content ?? "Error generating message";
      const [emailText, linkedInText] = result.split("\n\n");

      return { emailText, linkedInText };
    } catch (error) {
      console.error("OpenAI API error:", error);
      throw new Error("Failed to generate message");
    }
  },
};
