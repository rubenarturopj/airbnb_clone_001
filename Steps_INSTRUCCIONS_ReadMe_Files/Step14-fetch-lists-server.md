## Fetching listings with server components (Listing card component, direct server action)

We are going to load the first listing we created and set in the database, and display it on the website

1. Got to `LayOut.tsx` and in the return seciton wrap the `children` in a div.

2. Go to `page.tsx` and remove the long div in the return section. Instead, return the `<ClientOnly>` component we created before, inside a container, and more stuff where we're going to map through our listings. We put a placeholder here for the moment, as we take care of other stuff. We gonnac come back to this in step no. 7.

3. If the user hasn't selected anything: no conuntry, no location, etc. We have to present an empty state. So we're going to add a temporary constant for Empty and a temporal conditional rendering as placeholders to display this empty selection. We're going to edit it later. This conditiona rendering will return the `<EmptyState>` component. Create `EmptyState.tsx` in `app/components` folder. Mark it as "use client" on top. Import in page.tsx. Keep styling Emptystate.

4. Now that EmptyState is done. Go back to `Page.tsx` and add the `showReset` props to EmptyState. Now if we want to clear the selecion for the listing, we just click on the button on the UI and it will remove this selection.

5. We are going to call the DB directly in thi Page file. Create `GetListings.ts` in the folder `app/actions/`. And fill the file with the proper fetch function. We are fetchinga listing fromn the db.

6. Go to `Page.tsx` and improt the function we just created. Make the main function in ``Page.tsx` an Async function. Also delete the const `isEmpty` and we are going to elaborate on that but in the if statement were we return the `EmptyState`.

7. Now let's finish the display listing fetched from db, now that we set up the fetching. Go to the final return section of `Page.tsx` and take the listing constant and map through to render all its info. So fill it in as shown.

8. We'll need a new component called `<ListingCard>` component. Create a new folder called `Listings` in `app/components` directory. In there create our ListingCard component. Make sure to add "use client" on top. Before we style it, and because we're going to use this component a lot in several sections of the website, we're going to fetch first the current user as well.

9. Before we move on to the next step, we're going to fetch the current user as well. in `Page.tsx`. So add the constant taht will fetch the user. In case there is no user the page won't throw error because we set it up like that as a prevention in the file where the getCurrentUser() function was typed. Now that we have a const with the current user, we are going to pass it as a prop in the `<ListingCard>` component.

10. Now let's go back to style the `ListingCard`. Let's write the interface and the first constants, import everything needed as well. Now we're going to work in getting the location because in the databe we're just storing the initials from the location, but not the full name of the country. Once that done, we're going to build the `handleCancel` function in case we cancel. Then we will work on the price workaround. Later we will deal with the dates. For this, we need to install another package to manipulate dates (don't forget to stop the app and the restart it and refresh):

```sh
npm install date-fns
```

-   Import `format` from `date-fns`. Add the return for the dates.

11. Now it's time to format the return of `ListingCard`. When we are styling it, we are going to need a new `<HeatButton>` component.

12. Create the `HeartButton.tsx` in `app/components` folder. Start adding the interface and styling th return.

13. Once done go back to keep styling `ListingCard.tsx`.

Now we can add apartments to our Airbnb website and display them in the main page.
