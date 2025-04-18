'use client'
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
  } from "next"
  import { getProviders, signIn } from "next-auth/react"
  import { getServerSession } from "next-auth/next"
  // import { authOptions } from "../api/auth/[...nextauth]"
  import { authOptions } from "@/lib/auth-options"
  
  export default function SignIn({
    providers,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
      <>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </>
    )
  }
  
  export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions)
  
    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
      return { redirect: { destination: "/" } }
    }
  
    const providers = await getProviders()
  
    return {
      props: { providers: providers ?? [] },
    }
  }