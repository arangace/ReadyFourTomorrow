import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
export default NextAuth(authOptions);
