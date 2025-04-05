'use client'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import CompanyLogo from './CompanyLogo'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

function MobileMenu() {
    const session = useSession() ; 
  return (
    <Sheet>
        <SheetTrigger className="border p-2.5 rounded-lg text-foreground/60  hover:bg-gray-100">
            <Menu className=''/>
        </SheetTrigger>

        <SheetContent className='w-full'>
            <SheetHeader className='h-fit rounded-xl border '>
                <SheetTitle className='w-full flex justify-between items-center p-3  border-b '>
                    <CompanyLogo/>
                    <SheetClose className="rounded-sm h-fit opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                    </SheetClose>
                </SheetTitle>

                <ul className='flex flex-col gap-2 text-lg justify-items-start px-4 py-2'>
                    <div className="w-full flex items-center">
                        <li className="my-1 dark:hover:bg-slate-800 hover:bg-slate-50 p-2 rounded-lg">
                            <SheetClose className='flex flex-col-reverse gap-3'>

                                <div>
                                    {session.data?.user && <Link href={"/dashboard"}><Button>Go to app</Button></Link>}
                                    
                                    {!session.data?.user && <Button onClick={()=>signIn()}>Signin</Button>}
                                </div>
                                
                                

                                <div>
                                <p>Features</p>
                                </div>

                                <div>
                                <p>About</p>
                                </div>

                                
                            </SheetClose>
                        </li>
                    </div>
                </ul>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default MobileMenu