import { prismaClient } from "@/lib/db";
import { OpenAIService } from "@/lib/openAi";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";
import {z} from "zod"

const messageSchema = z.object({
    role: z.string().min(2, "Role is required"),
    skills: z.string().min(2, "Skills are required"),
    company: z.string().min(2, "Company name is required"),
    tone: z.enum(["FORMAL", "CASUAL", "ENTHUSIASTIC"]),
    others: z.string().optional()
  });


export async function POST(req: NextRequest){

  try{
    const body = await req.json() ;
    const validation = messageSchema.safeParse(body) ; 

    if(!validation.success){
      return NextResponse.json({error : validation.error.errors} , {status:400})
    }

    const {role , skills , company ,tone , others} = validation.data ; 

    const {emailText , linkedInText} = await OpenAIService.generateMessage(
      role , skills , company , tone , others || ""
    )

    const message = await prismaClient.create({
       
    })

  }catch(error){
    console.error("Error generating messages" , error) ;
    return NextResponse.json({error : "failed to generate message"} , {status: 500}) ; 
  }
}