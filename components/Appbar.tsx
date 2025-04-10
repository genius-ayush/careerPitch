'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import Link from "next/link";
import CompanyLogo from "./CompanyLogo";
import MobileMenu from "./MobileMenu";
// import { useRef } from "react";
// import { useScrollContext } from "@/contexts/scroll-context";

function Appbar() {
    const session = useSession() ;
    // const { scrollToFeatures} = useScrollContext() ; 
  return (
    

    <>
      <nav className="fixed z-50 w-full backdrop-blur-lg border-b">

        <div className="flex h-[60px] items-center justify-between w-full lg:px-40 px-2">
          <Link href="/landing"><CompanyLogo/></Link>

          <div className="flex items-center">
            <Link href="#about" className="md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-400">About</Link>
            <Link href="#features" className="md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-400"  >Features</Link>
            {session.data?.user && <Link href={'/dashboard'}><Button className="md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-400">Go to app  </Button></Link>}
            {!session.data?.user && <Link href={"/login"}><Button className="md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-400" >Sigin</Button> </Link>} 
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