import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;

/* 
we import PrismaCLient and we give it a global definition of Prisma, so it can work
throughout all our code.

the we create the const client which will search for the global prisma or will create 
a new prisma

IF. if our environment is not in production, the we set the globatthis.prisma to this newly
created client

BUT WHY DID WE WRITE THIS CODE? 

Because Next.js 13 hot reloading can cause a bunch of these "new PrismaClient()"s instances
to be created, giving us a warning in the terminal. So this way, we assign this "prismaClient"
to a globalThis variable which is not affected by hot reload. So this is just a best practice
for using Prisma with Next.js 13.

If you want, you can technically import PrismaClient() everywhere in your code.

But this solution is cleaner and best practice.


*/
