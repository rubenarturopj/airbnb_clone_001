## Reservations screen (Loading guest reservations with server component)

### Create a route to cancel a reservation

1. Go to `app/api/reservations/` and create a new folder called `[reservationId]`. Inside, create a new file called `route.ts`. Import what you need. and fill it in. You can try it now and cancel a reservation on the UI. It should work. The code where we are deleting is in `TripsClient.tsx`.

-   Test it out, cancel a reservation and you should succeed.

### Create a route for "/MyReservations"

1. Go to `app/` folder and create a new folder inside of it called: `reservations`. In there, create a new file called `page.tsx`. Fill it in as shown.

2. Create a new file next to the previous one called `ReservationsClient.tsx`. Import it in our previous file. Now let's fill this one in and style it.

3. To enable to route in the User Menu UI, when you click on your picture menu and a dropdown menu pops out. You have a list, you can choose My reservations. To be able to click on that we need to enable that router first. Go to `app/components/navbar/UserMenu.tsx` and look for the MenuItem component that corresponds to My Reservations, and in the empty function add `router.push("/reservations")`.

-   ⚠️ This name has to be identical to the new folder we created for the reservations stuff.

4.  Go back to `ReservationsClient.tsx` and fill it in and style it. Here we're going to reuse the same code to cancel used in Step 1 from the first part in this document. This way we will be able to cancel reservations from guests that they booked.

-   Try canceling guest reservations. It works!!!

### Bug fix

When we sign up, the loginModal would not appear.

1. Go to `app/components/modals/RegisterModal.tsx`.

2. Look for the code line where you use AXIOS to send a post and create a user, and add in the success part: `loginModal.onOpen()`. Let's also add a success message to let the user know.
