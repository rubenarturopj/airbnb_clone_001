/* this file contains the social media loggins/credentials like loggin using your 
already exiting google account, or facebook, or github account.
*/
import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/app/libs/prismadb";

// this is a big object that has 6 properties, one of them is and arrayd and another is a function.
// it contains: adapter, providers, pages, debug, session, secret.
// this is a OOP object that will be passed into another function at the end

// the function contains the 3 methods to log in in our website: using google credentials,
// using github credentials, and using registration credentials (email and password)
// one could add more credential providers (twitter, for example, or instagram)

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        // github credentials
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        // google credentials
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        // email and password.
        // credentialsProvider() is a function to verify. It's passing 1 object as a parameter.
        // this object has 3 properties: name, credentials and a function. This is OOP
        CredentialsProvider({
            name: "credentials",
            credentials: {
                // this will come from the login form we created
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                // "  ?.  " means "if there is", like for waiting until there is. Puede que haya, puede que no, es como opcional
                // if Email or password were not entered, then throw error
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }

                // this comes from the db that we have, (we did  npx prisma db push  )
                // Prisma allows us to search in the "User" table (prisma.user) for the one user
                // whose email coincides with the one entered in the login UI (credentials.email)
                // Remember we set this up in schema.prisma file.
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                // hashed password means encrypted password into a short string to protect it.
                // if there is no user or user doesn't have encrypted password
                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid credentials");
                }

                // this will hold the comparison between the password entered in the form and
                // the Encrypted password in the database..... through BCRYPT
                // it returns a boolean
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                // if it's falsy, throw error
                if (!isCorrectPassword) {
                    throw new Error("Invalid credentials");
                }

                // if truthy, return the User profile or table, like the info of the user.
                return user;
            },
        }),
    ],
    // if there is any errors (also if we use weird types of callbacks),
    // user will be redirected to "/" page, which is our home page.
    pages: {
        signIn: "/",
    },
    // You only want to enable DEBUG if you are in Development. This will help you to see
    // some errors in the terminal, which otherwise you would not see.
    debug: process.env.NODE_ENV === "development",
    // for the session: JWT. Which stands for JSON Web Tokens
    session: {
        strategy: "jwt",
    },
    // What's this for ????
    secret: process.env.NEXTAUTH_SECRET,
};

// we are exporting and passing the previously created object
export default NextAuth(authOptions);
