## Properties screen (Loading favorites with server component)

### We are goint to work on My Proterties option in the menu

1. Go to `app/components/navbar/usermenu`. Find the MenuItem that belongs to `My Proterties`. There change the return of the void function to the following router: `router.push("/properties")`.

2. Now we will go to `app/actions/getListings.ts` and create an interface. Then we are going to pass this interface into the main function. We are going to start modifying the main function to include interface values we're passing.

-   We were using this action to fetch all the listings, but now we're going to modify it so we can fetch personalized listings.

3. After doing some changes, our app is going to throw an error. To fix this, go to `app/page.tsx` (main page.tsx) and let's create an interface to pass into the function that is giving us now the error. Then we are going to rewrite the main `Home` function and add an export at the end of the file. Finally pass the interface as parameters for the function. Then add this parameters to the constant that carries getListings.

4. Go to `app` folder, select the `trips` folder, COPY it and then PASTE right there in `app` folder. Change it's name to `Properties`.

5. Go to `app/properties/page.tsx`. Rename the name of the function and the export at the bottom to `PropertiesPage`. Fetch user and react to unauthorized stays the same. We are going to change the part for `reservations` to `listings`. DO more necessary changes so that it's all consistent with listings and not with reervations.

6. In the return section. We'are going to use anothe component, we are goint to go the copy of `TripsClient.tsx` and transform it into our new component `PropertiesClient.tsx`. Do more modifications to the file so it all works with properties.

### Create a route to delete a property

We need to create a route to delete a property, in `PropertiesClient.tsx` we are using `/api/listings/${id}` but it does not exist.

1. a

:::::::::::::::::::::::::::::::::::::

ME QUEDÉ EN EL VIDEO: 7 H 42 MIN 37 S

:::::::::::::::::::::::::::::::::::::
