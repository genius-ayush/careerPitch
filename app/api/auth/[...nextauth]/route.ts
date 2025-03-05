import { prismaClient } from "@/lib/db";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],

  callbacks: {
    async signIn(params) {
      if (!params.user.email) {
        return false;
      }
      try {

        const existingUser = await prismaClient.user.findUnique({
          where: { email: params.user.email }
        })

        if (!existingUser) {
          await prismaClient.user.create({
            data: {
              email: params.user?.email,
              name: params.user?.name,
              image: params.user?.image,
            }
          })

        } else {

          prismaClient.user.update({
            where: { email: params.user.email },
            data: {
              name: params.user?.name,
              image: params.user?.image,
            }
          })


        }

      } catch (error) {
        console.error("login error", error);
        throw new Error("Failed to Login");
      }

      return true;
    }, async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard`; // Redirects user to /dashboard after login
    },


  }


})

export { handler as GET, handler as POST }