/** With this new Next.js update we can Customize our http requests (post, get, delete, etc) */
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
    const body = await request.json();
    const { email, name, password } = body;

    // bcrypt.hash  is a function that Encrypts a password
    // bcrypt.compare   checks if they match or not
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword,
        },
    });

    // to use the response (transform it into json)
    return NextResponse.json(user);
}
