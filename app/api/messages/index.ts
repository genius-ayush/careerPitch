import { prismaClient } from "@/lib/db";
import { OpenAIService } from "@/lib/openAi";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import {z} from "zod"

const messageSchema = z.object({
    role: z.string().min(2, "Role is required"),
    skills: z.string().min(2, "Skills are required"),
    company: z.string().min(2, "Company name is required"),
    tone: z.enum(["FORMAL", "CASUAL", "ENTHUSIASTIC"]),
  });

export default async function handler(req : NextApiRequest , res : NextApiResponse){

  if(req.method !== "POST")return res.status(405).json({message: "Method Not Allowed"})

  const session = await getSession({req}) ;
  
  if(!session)return res.status(401).json({message: "Unauthorized"});

  try{

    const parsedData = messageSchema.parse(req.body) ;

    const {emailText , linkedInText} = await OpenAIService.generateMessage(
      parsedData.role , 
      parsedData.skills , 
      parsedData.company , 
      parsedData.tone
    )

    const message = await prismaClient.message.create({
      data:{email : session.user?.email , name : session.user?.name , }
    })

  }catch(error){
    if(error instanceof z.ZodError){
      return res.status(400).json({errors : error.errors}) ; 
    }
    return res.status(500).json({message : "error generating message"}) ; 
  }
}