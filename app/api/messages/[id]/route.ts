import { authOptions } from "@/lib/auth-options";
import { prismaClient } from "@/lib/db";
import { getServerSession } from "next-auth";
import { useParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){

    const session = await getServerSession(authOptions) ; 
    const  params = useParams() ; 
    try{

        if(session){
            const message = await prismaClient.message.findFirst(params)
        }
    }catch(error){
        console.error("Error fetching message" , error)
        return NextResponse.json({error:"failed to fetch message"} ,{status:400})
    }
}