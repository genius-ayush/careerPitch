import { prismaClient } from "@/lib/db";
import { OpenAIService } from "@/lib/openAi";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { NextRequest } from "next/server";
import {z} from "zod"

const messageSchema = z.object({
    role: z.string().min(2, "Role is required"),
    skills: z.string().min(2, "Skills are required"),
    company: z.string().min(2, "Company name is required"),
    tone: z.enum(["FORMAL", "CASUAL", "ENTHUSIASTIC"]),
  });


export async function POST(req: NextApiRequest , res: NextApiResponse){

  const session = await getSession({req}) ; 

  if(!session) return res.status(401).json({message: "Unauthorized"}) ; 

  try{

    const parsedData = messageSchema.parse(req.body) ; 

    const {emailText , linkedInText} = await OpenAIService.generateMessage(
      parsedData.role , 
      parsedData.skills , 
      parsedData.company , 
      parsedData.tone 
    )

    const user = await prismaClient.user.findUnique({where : {email : session.user?.email || ""}})


    if(!user){
      return res.status(404).json({message: "user not found"}) ; 
    }
    
    const message = await prismaClient.message.create({
      data: {
        userId : user.id , ...parsedData , emailText , linkedInText
      }
    })

    res.status(201).json(message) ; 

  }catch(error){
    if(error instanceof z.ZodError){
      return res.status(400).json({errors : error.errors}) ; 
    }

    return res.status(500).json({message: "Error generating message"}) ; 
  }

}