import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
    userId?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
}

export default async function getListings(params: IListingsParams) {
    try {
        const {
            userId,
            roomCount,
            guestCount,
            bathroomCount,
            locationValue,
            startDate,
            endDate,
            category,
        } = params;

        let query: any = {};

        if (userId) {
            query.userId = userId;
        }

        // if there is a category param in the URL
        if (category) {
            query.category = category;
        }

        // if there is a room count param in the URL
        // gte   means "greater than or equal to" ">="
        // the    +    sign is important
        if (roomCount) {
            query.roomCount = {
                gte: +roomCount,
            };
        }

        // if there is a guest count param in the URL
        // gte   means "greater than or equal to" ">="
        // the    +    sign is important
        if (guestCount) {
            query.guestCount = {
                gte: +guestCount,
            };
        }

        // if there is a bathroom count param in the URL
        // gte   means "greater than or equal to" ">="
        // the    +    sign is important
        if (bathroomCount) {
            query.bathroomCount = {
                gte: +bathroomCount,
            };
        }

        // if there is a location param in the URL
        if (locationValue) {
            query.locationValue = locationValue;
        }

        // if there are startDate and endDate params in the URL
        // to filter our all the listings which have a reservation in our desired date range
        // we are using 2 combinations here to make sure we filter out all conflicts in our
        // reservation.
        // ****
        // gte   means "greater than or equal to" ">="
        // lte   means "lower than or equal to"  "<="
        if (startDate && endDate) {
            query.NOT = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: { gte: startDate },
                                startDate: { lte: startDate },
                            },
                            {
                                startDate: { lte: endDate },
                                endDate: { gte: endDate },
                            },
                        ],
                    },
                },
            };
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: "desc",
            },
        });

        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));

        return safeListings;
    } catch (error: any) {
        throw new Error(error);
    }
}
