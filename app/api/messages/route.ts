import { prismaClient } from "@/lib/db";
import { OpenAIService } from "@/lib/openAi";
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { authOptions} from "@/app/api/auth/[...nextauth]/route"

import { z} from "zod"

const messageSchema = z.object({
    role: z.string().min(2, "Role is required"),
    skills: z.string().min(2, "Skills are required"),
    company: z.string().min(2, "Company name is required"),
    tone: z.string(),
    others: z.string().optional()
  });


export async function POST(req: NextRequest){
  const session = await getServerSession(authOptions)
  console.log("session : " + session) ; 
  try{
    const body = await req.json() ;
    const validation = messageSchema.safeParse(body) ; 

    if(!validation.success){
      return NextResponse.json({error : validation.error.errors} , {status:400})
    }

    const {role , skills , company ,tone , others} = validation.data ; 

    
    
    //@ts-ignore
    if(session.data?.user?.email != null){

      const {emailText , linkedInText} = await OpenAIService.generateMessage(
        role , skills , company , tone , others || ""
      )
      const message = await prismaClient.message.create({
        //@ts-ignore
          data : {email : session.data?.user?.email , emailText , linkedInText , role , skills , company  , tone } 
        })
        return NextResponse.json({ emailText , linkedInText});
    }else{
      return NextResponse.json({error : "unauthorized user"} , {status: 401})
    }

      
      
  }catch(error){
    console.error("Error generating messages" , error) ;
    return NextResponse.json({error : "failed to generate message"} , {status: 500}) ; 
  }
}