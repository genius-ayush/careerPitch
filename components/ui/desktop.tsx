import React from 'react'
import Image from 'next/image'
import { BorderBeam } from './boarder-beam'
import { Card } from './card'
import { NeonGradientCard } from './neon-gradiant'
import { Button } from './button'

function Desktop() {
    return (
        <div className=''>
            <div className='flex justify-center px-4 sm:px-6 md:px-8'>
                <NeonGradientCard
                    className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2'
                    borderRadius={12}
                    borderSize={1}
                >
                    <Image
                        src="/hero.png"
                        alt="Picture of the author"
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-contain"
                    />

                    <BorderBeam duration={8} size={100} />
                </NeonGradientCard>
            </div>
        </div>
    )
}

export default Desktop
