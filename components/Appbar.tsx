'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"

function Appbar() {

    const session = useSession() ;

  return (
    // <div className="flex justify-between p-10 bg-amber-100">
    //     <div>CareerPitch</div>
    //     <div>
    //     {session.data?.user && <Button onClick={()=>signOut()}>logout</Button>}
    //     {!session.data?.user && <Button onClick={()=>signIn()}>Sigin</Button>}
        
    //     </div>
    // </div>

    <>
      <nav className="fixed">

      </nav>
    </>
  )
}

export default Appbar