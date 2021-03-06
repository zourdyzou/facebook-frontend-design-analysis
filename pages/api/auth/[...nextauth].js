import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    // Providers.Facebook({
    //   clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    // }),
    Providers.Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
});
