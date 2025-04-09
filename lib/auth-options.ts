import { NextAuthOptions, Session } from "next-auth";
// import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// import { emailSchema, passwordSchema } from "@/schema/credentials-schema";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
// import prisma from "@/lib/db";
import { prismaClient } from "@/lib/db";


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),

  ],

  pages: {
    signIn: "/login" ,
  } ,
  
  secret: process.env.NEXTAUTH_SECRET ?? "secret",
//   session: {
//     strategy: "jwt"
//   },
  callbacks: {
    // async jwt({ token, account, profile }) {
    //   if (account && profile) {
    //     token.email = profile.email as string;
    //     token.id = account.access_token;
    //   }
    //   return token;
    // },
    // async session({ session, token }: {
    //   session: Session,
    //   token: JWT;
    // }) {
    //   try {
    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: token.email
    //       }
    //     });

    //     if (user) {
    //       session.user.id = user.id;
    //     }
    //   } catch (error) {
    //     if (error instanceof PrismaClientInitializationError) {
    //       throw new Error("Internal server error");
    //     }
    //     console.log(error);
    //     throw error;
    //   }
    //   return session;
    // },
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
      },
      async redirect({ url, baseUrl }) {
        return `${baseUrl}/dashboard`; // Redirects user to /dashboard after login
      },
  }
} satisfies NextAuthOptions;