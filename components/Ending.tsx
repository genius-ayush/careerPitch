'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { signIn, useSession } from "next-auth/react"

function Ending() {
  const session = useSession();
  return (
    <section className="w-full py-20 md:py-32 border-t border-white/10 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to get more referrals?</h2>
          <p className="text-white/70 max-w-[700px]">
            Start generating personalized referral messages today and increase your chances of landing your dream
            job.
          </p>


          {session && <Link href={"/dashboard"}><Button className="mt-8 px-8 py-6 text-base rounded-md bg-white text-black hover:bg-white/90">Go to app  <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>}
          {!session && <Button className="mt-8 px-8 py-6 text-base rounded-md bg-white text-black hover:bg-white/90" onClick={() => signIn()}>Get started for free
            <ArrowRight className="ml-2 h-4 w-4" /></Button>}



        </div>
      </div>
    </section>
  )
}

export default Ending