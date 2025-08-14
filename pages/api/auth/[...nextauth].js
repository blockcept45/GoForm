import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login", // fallback if no callbackUrl
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // If the URL is a relative path, return as-is (used via signIn)
      if (url.startsWith("/")) return url;

      // If absolute URL (e.g. full http://...), default to baseUrl/dashboard
      return `${baseUrl}/saarthilms.com`;
    },
  },
});
