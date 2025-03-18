'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import Link from "next/link";
import CompanyLogo from "./CompanyLogo";
import MobileMenu from "./MobileMenu";

function Appbar() {

    const session = useSession() ;
    console.log(session.data) ; 
  return (
    // <div className="flex justify-between p-10 bg-amber-100">
    //     <div>CareerPitch</div>
    //     <div>
    //     {session.data?.user && <Button onClick={()=>signOut()}>logout</Button>}
    //     {!session.data?.user && <Button onClick={()=>signIn()}>Sigin</Button>}
        
    //     </div>
    // </div>

    <>
      <nav className="fixed z-50 w-full backdrop-blur-lg border-b">

        <div className="flex h-[60px] items-center justify-between w-full lg:px-40 px-2">
          <Link href="/landing"><CompanyLogo/></Link>

          <div className="flex items-center">
            <Link href="#about" className="md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-400">About</Link>
            <Link href="#features" className="md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-400">Features</Link>
            {/* {session.data?.user && <Button>hey  </Button>} */}
            <Link href="#signin" className="md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-400"><Button>Signin </Button></Link>
          </div>

          <div className="md:hidden">
            <MobileMenu/> 
        </div>
        </div>

        

          
      </nav>
    </>
  )
}

export default Appbar