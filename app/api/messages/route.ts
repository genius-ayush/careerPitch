import { prismaClient } from "@/lib/db";
import { OpenAIService } from "@/lib/openAi";
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/auth-options"

import { z} from "zod"

const messageSchema = z.object({
    role: z.string().min(2, "Role is required"),
    skills: z.string().min(2, "Skills are required"),
    company: z.string().min(2, "Company name is required"),
    tone: z.string(),
    others: z.string().optional()
  });


export async function POST(req: NextRequest ){
  const session = await getServerSession(authOptions)
  console.log("session : ", session) ; 
  try{
    const body = await req.json() ;
    const validation = messageSchema.safeParse(body) ; 

    if(!validation.success){
      return NextResponse.json({error : validation.error.errors} , {status:400})
    }

    const {role , skills , company ,tone , others} = validation.data ; 

    
    
    if(session?.user?.email){

      const {emailText , linkedInText} = await OpenAIService.generateMessage(
        role , skills , company , tone , others || ""
      )
      const message = await prismaClient.message.create({
          data : {email : session.user?.email , emailText , linkedInText , role , skills , company  , tone } 
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

export async function GET(req :NextRequest){
  
  const session = await getServerSession(authOptions) ; 

  try{

    if(session?.user?.email){

      const messages = await prismaClient.message.findMany({
        where:{
          email: session.user.email,
        },  
      }) ; 
      return NextResponse.json(messages , {status:200}) ;
    }else{
      return NextResponse.json({error:"unauthorized user"} , {status:401})
    }

  }catch(error){
    console.error("Error fetching messages" , error)
    return NextResponse.json({error: "failed to get messages"} , {status:400})
  }
}