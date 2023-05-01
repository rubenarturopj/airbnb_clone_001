// this is server component

import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
    // get user
    const currentUser = await getCurrentUser();
    // if there's no user = user hasn't signed in
    if (!currentUser) {
        return (
            <ClientOnly>
                {/* prettier-ignore */}
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please log in"
                />
            </ClientOnly>
        );
    }

    // get listings
    const listings = await getListings({ userId: currentUser.id });
    // if there are no listings made in the DB
    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No properties found"
                    subtitle="Looks like you have no properties."
                />
            </ClientOnly>
        );
    }

    // it there's a user and there are listings
    return (
        <ClientOnly>
            <PropertiesClient listings={listings} currentUser={currentUser} />
        </ClientOnly>
    );
};

export default PropertiesPage;
