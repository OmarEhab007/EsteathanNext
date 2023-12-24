import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../lib/db";

export const options: NextAuthOptions = {
    providers: [
  
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "اسم المستخدم", type: "text" },
        password: {  label: "كلمة السر", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            username: credentials.username,
            password: credentials.password
          },
        });
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    })

  
]
}