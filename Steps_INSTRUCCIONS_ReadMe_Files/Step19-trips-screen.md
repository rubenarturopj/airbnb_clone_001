## Trips screen (Loading trips with server component)

Let's create our `/Trips` router

1. In `app` folder, create a new folder called `trips`. Inside, create a new file called `page.tsx`. The complete path is `app/trips/page.tsx`.In there we're going to query and get the reservations, first we're going to creat if statements in case user hasn't signed in or there are no reservations to fetch. Make sure to add at the bottom the export feature. In the final return section, we are going to import a new component called `<TripsClient>` and pass some props. We haven't created it.

2. Let's create our new `<TripsClient>` component in a new file called `TripsClient.tsx`, which will be localted in the same folder we created before. The full path is `app/trips/TripsClient.tsx`. Before styling it, import it in the Page.tsx page described in the previous step.

3. Go to `app/components/navbar/usermenu.tsx`. In there, in the MenuItem component with the label "My trips", change the empty function for `router.push("/trips")`, we need to create this constant at the beginngin of the function, this router constant will be using `useRouter` from `next/navigation`. So make sure you imported it. So we ar creating a new router called "/trips". Now I can open the user menu in the UI and click on trips and it should be redirecting me to this new page. If we are logged in and have made reservations before, it should show the `<TripsClient>` component content.

4. Let's style the `<TripsClient>` component. Mark it as "use client". Import everything, and style everything. Also we are going to implement the `onCancel` function, which will call axios to delete from a router path. This path we haven't created it yet, but we're still going to add it. If we get an error with the reservation prop, then go to `ListingCard.tsx` and in the interface change the Reservation for `SafeReservation` and import it from types.

5. Finally go back to `app/listings/ListingClient.tsx` and remember we had a pending comment to redirect at some part of the function? Well now it's the time to change the router behaviour to `router.push("/trips")`. Refresh your browser. to try it out. With this implementation, after creating a reservation for an appartment, you should be redirected to "trips" and see all your reservations.
