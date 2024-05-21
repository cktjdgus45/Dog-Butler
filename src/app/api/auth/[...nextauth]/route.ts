import NextAuth, { DefaultUser } from "next-auth"
import Kakao from 'next-auth/providers/kakao'
import Naver from 'next-auth/providers/naver'

type CustomUser = DefaultUser & { username: string };

export const handler = NextAuth({
    providers: [
        Kakao({
            clientId: process.env.KAKAO_CLIENT_ID as string,
            clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
        }),
        Naver({
            clientId: process.env.NAVER_CLIENT_ID as string,
            clientSecret: process.env.NAVER_CLIENT_SECRET as string,
            profile(profile) {
                return {
                    id: String(profile.id),
                    name: profile.response.name,
                    email: profile.response.email,
                    image: profile.response.profile_image,
                }
            },
        })
    ],
    pages: {
        signIn: '/auth/signIn'
    },
    callbacks: {
        async session({ session, token }) {
            const user = session?.user;
            if (user) {
                session.user = {
                    ...user,
                    username: user.email?.split('@')[0] || '',
                    id: token.id as string,
                } as CustomUser;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    }
})
export { handler as GET, handler as POST };