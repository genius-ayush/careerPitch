import { authOptions } from "@/lib/auth-options";
import { prismaClient } from "@/lib/db";
import { getServerSession } from "next-auth";
// import { useParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }){

    
    try{
        const session = await getServerSession(authOptions) ;
        if(!session || !session.user?.email){
            return NextResponse.json({error:"unauthorized user"} , {status:401})
        }

        const messageId = parseInt(params.id) ; 

        if(isNaN(messageId)){
            return NextResponse.json({error:"Invalid message ID"} , { status:400})
        }

        const message = await prismaClient.message.findUnique({
            where:{
                id:messageId , 
                email: session.user.email,
            }
        })

        if(!message){
            return NextResponse.json({error:"message not found"}, {status : 404})
        }

        return NextResponse.json(message , {status:200});

    }catch(error){
        console.error("Error fetching message" , error)
        return NextResponse.json({error:"failed to fetch message"} ,{status:400})
    }
}

export async function PATCH(req:Request , {params} :{params:{id:string}}){
    console.log("here") ; 
    try{

        const session = await getServerSession(authOptions) ; 

        if(!session || !session.user?.email){
            return NextResponse.json({error:"Unauthorized user"} , {status:401});
        }

        const messageId = parseInt(params.id) ; 

        if(isNaN(messageId)){
            return NextResponse.json({error:"Invalid message ID"} , {status:400})
        }

        const body = await req.json() ; 

        const {emailText , linkedInText} = body ; 

        const updatedMessage = await prismaClient.message.update({
            where:{
                id:messageId , 
                email:session.user.email , 
            }, 
            data:{
                emailText , 
                linkedInText,
            }
        })

        return NextResponse.json(updatedMessage , {status:200}); 
        
    }catch(error){
        console.error("Error updating message:", error) ; 
        return NextResponse.json({error:"failed to update message"},{status:500}); 
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        console.log("Received params:", params); 
      const session = await getServerSession(authOptions);
      if (!session || !session.user?.email) {
        return NextResponse.json({ error: "Unauthorized user" }, { status: 401 });
      }
  
      const messageId = parseInt(params.id);
      if (isNaN(messageId)) {
        return NextResponse.json({ error: "Invalid message ID" }, { status: 400 });
      }
  
      await prismaClient.message.delete({
        where: {
          id: messageId,
          email: session.user.email, 
        },
      });
  
      return NextResponse.json({ message: "Message deleted successfully" }, { status: 200 });
  
    } catch (error) {
      console.error("Error deleting message:", error);
      return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
    }
  }