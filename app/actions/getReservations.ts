// we are going to use this Action in My trips, My reservations and Detailed page of a house.

import prisma from "@/app/libs/prismadb";

// listingID to query through detailed page and get all reservations of that apartment
// userID to query through my trips
// author to query through My reservations and get all the reservations someone else made on our property
interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getReservations(params: IParams) {
    try {
        const { listingId, userId, authorId } = params;

        const query: any = {};

        if (listingId) {
            query.listingId = listingId;
        }

        if (userId) {
            query.userId = userId;
        }

        if (authorId) {
            query.listing = { userId: authorId };
        }

        const reservations = await prisma.reservation.findMany({
            where: query,
            include: {
                listing: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        // we could return now what we found, but we're going to get errors because of the dates
        // so:
        const safeReservations = reservations.map((reservation) => ({
            ...reservation,
            createdAt: reservation.createdAt.toISOString(),
            startDate: reservation.startDate.toISOString(),
            endDate: reservation.endDate.toISOString(),
            listing: {
                ...reservation.listing,
                createdAt: reservation.listing.createdAt.toISOString(),
            },
        }));

        return safeReservations;
    } catch (error: any) {
        throw new Error(error);
    }
}
