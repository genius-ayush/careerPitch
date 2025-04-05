'use-client'
import React, { createContext, ReactNode, useContext, useRef } from "react";

interface ScrollContextType {
    featureRef : React.RefObject<HTMLElement> | null 
    scrollToFeatures : ()=> void
}

const ScrollContext = createContext({
    featureRef : null , 
    scrollToFeatures : ()=> {}
})

export const useScrollContext = ()=> useContext(ScrollContext) ; 

export function ScrollProvider({children}: {children:ReactNode}){
    const featureRef = useRef<HTMLElement>(null) ; 

    const scrollToFeatures =()=>{
        featureRef.current?.scrollIntoView({behavior:"smooth"}) 
    }

    const value = {
        featureRef , 
        scrollToFeatures , 
    }
    //@ts-ignore
    return <ScrollContext.Provider value={value}></ScrollContext.Provider>
}