## Reservation functionality (routes, logic)

-   Let's create the route for making reservations with axio.

1. Go to `app/api` and create a new folder called: `reservations`. Inside this folder create a file called: `route.ts`. ATTENTION: it's ROUTE not ROUTERRR. Fill it in, now make a reservation on the UI and it will be sent to the database.

2. After our past success. We are going to make the website to not allow us to make another reservation on the same dates because that date has already been taken. Go to `app/actions` and create a file called: `getReservations.ts`. Fill it in.

3. Go to `app/listings/[listingId]/page.tsx` and call the reservations we just crated at the top of the return function. Then pass that constant to the `<ListingClient>` cmponent. We may have an error there, so let's got to `ListingClient.tsx` and in the interface section we are going to do some changes so we have a `safeReservation`.

4. Go back to `app/types/index.ts` and create the new type `SafeReservation`. Once that done, go back to `ListingClient.tsx` and make changes in the interface.

5. Now if you try to make a new reservatin, you should be greyed out the dates not available.
