
import { MessageGenerator } from "@/components/message-generator"
import { useSession } from "next-auth/react"

function page() {

  // const session = useSession() ; 

  // if(typeof window !== "undefined" ) return null

  {
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 p-10 ">
          <MessageGenerator />
        </div>
      </div>
    )
  }
  
}

export default page