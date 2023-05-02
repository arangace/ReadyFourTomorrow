import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
type jwt = {
  token?: any;
  account?: any;
  profile?: any;
  session?: any;
  user?: any;
};
export const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,

      idToken: true,

      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.events            ",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({ token, account, profile }: jwt) => {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }
      return token;
    },
    async session({ session, token, user }: jwt) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },
};
export default NextAuth(authOptions);
