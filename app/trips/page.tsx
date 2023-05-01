// this is server component

import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
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

    // get reservations
    const reservations = await getReservations({ userId: currentUser.id });
    // if there are no reservations made in the DB
    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No trips found"
                    subtitle="Looks like you havent reserved any trips."
                />
            </ClientOnly>
        );
    }

    // it there's a user and there are reservations
    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    );
};

export default TripsPage;
