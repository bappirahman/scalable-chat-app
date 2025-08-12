import { CustomSession } from "@/types/session";
import { CustomUser } from "@/types/user";
import { Session } from "inspector/promises";
import { AuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    async session({ session, token, user }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};
