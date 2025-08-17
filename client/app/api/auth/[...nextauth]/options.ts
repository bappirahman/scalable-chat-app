import { LOGIN_URL } from "@/lib/apiEndPoints";
import { CustomSession } from "@/types/session";
import { CustomUser } from "@/types/user";
import axios from "axios";
import { Session } from "inspector/promises";
import { Account, AuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: CustomUser;
      account: Account | null;
    }) {
      try {
        console.log("user", user);

        const payload = {
          email: user.email,
          name: user.name,
          oauth_id: account?.providerAccountId,
          provider: account?.provider,
          image: user?.image,
        };
        const { data } = await axios.post(LOGIN_URL, payload);
        console.log("data", data);

        user.id = data?.user?.id.toString();
        user.token = data?.user?.token.toString();
        user.provider = data?.user?.provider.toString();
        return true;
      } catch (error) {
        return false;
      }
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
