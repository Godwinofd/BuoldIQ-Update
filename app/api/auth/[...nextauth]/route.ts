import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '@/lib/auth';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Please enter your email and password');
                }

                // Check if credentials match admin credentials from environment
                const adminEmail = process.env.ADMIN_EMAIL;
                const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

                if (!adminEmail || !adminPasswordHash) {
                    throw new Error('Admin credentials not configured');
                }

                if (credentials.email !== adminEmail) {
                    throw new Error('Invalid email or password');
                }

                const isValid = await verifyPassword(credentials.password, adminPasswordHash);

                if (!isValid) {
                    throw new Error('Invalid email or password');
                }

                return {
                    id: '1',
                    email: adminEmail,
                    name: 'Admin',
                };
            },
        }),
    ],
    pages: {
        signIn: '/admin/login',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
