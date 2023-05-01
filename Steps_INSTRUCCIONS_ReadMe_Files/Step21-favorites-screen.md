## Favorites screen (Loading favorites with server component)

1. Go to `app/components/navbar/usermenu.tsx`. Find the MenuItem for "My favorites" and change the empty function for `router.push("/favorites")`. The router has been created, now we need to create the actual page por that router.

-   That is first of all a folder in `/app/` called `favorites`.
-   For each router, we need to create a folder in `app` with the same name of the router.
-   Inside that new folder, there has to be a main file which will always be called `page.tsx`.

2. In `app` folder create another folder called `favorites`. Add the imports and structure. At some point you will need more components that we will creat soon. One of these two is an action called `getFavoriteListings.ts`.

3. Create `getFavoriteListings.ts` in `app/actions`. All our actions grab data from the DB and some are dependant of the getCurrentUser one.

4. Once done, go back to `page.tsx` and import the action we created. Set the function to return just a title an subtitle in case our favorites have a length of 0. If our favorites have elements in it, then we are going to return a new component called `<FavoritesClient.tsx>`

5. Create this new `<FavoritesClient.tsx>` component in the same `favorites` folder. Import it in the `page.tsx` file so we don't get an error. We'll style it later. In the meantime lets finish `page.tsx` with both returns.

6. Fill in and style `<FavoritesClient.tsx>`.

-   If you don't have anything favorited, go back to main page and select listings. Then come to my favorites again.
