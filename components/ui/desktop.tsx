import React from 'react'
import Image from 'next/image'
import { BorderBeam } from './boarder-beam'
import { Card } from './card'
import { NeonGradientCard } from './neon-gradiant'
import { Button } from './button'
function Desktop() {
    return (
        <div className=''>
            
        <div className='flex justify-center '>
            
            {/* <Card className=""> */}
            
            <NeonGradientCard className=' w-1/2 '  borderRadius={12} borderSize={1}>
                <Image src="/hero.png"
                    alt="Picture of the author"
                    width={1000} height={1000}
                    
                />  

                <BorderBeam duration={8} size={100} />
                </NeonGradientCard>
                {/* </Card> */}
                
        </div>
        </div>
    )
}

export default Desktop