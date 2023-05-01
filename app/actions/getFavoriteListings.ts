import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

export default async function getFavoriteListings() {
    try {
        //fetch user
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return [];
        }

        // get all the favorites
        const favorites = await prisma.listing.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])],
                },
            },
        });

        // to avoid errors of date
        const safeFavorites = favorites.map((favorite) => ({
            ...favorite,
            createdAt: favorite.createdAt.toISOString(),
        }));

        return safeFavorites;
    } catch (error: any) {
        throw new Error(error);
    }
}
