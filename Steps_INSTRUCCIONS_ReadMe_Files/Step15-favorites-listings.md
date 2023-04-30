## Favorites listings

Create the routes for our "favorites" system

1. Go to `app/api` folder and inside create a new folder called `favorites`. Inside this new folder, create a folder called: `[listingId]`. In it create a new file called: `route.ts`. The structure is the following: `app/api/favorites/[listingId]/route.ts`.

2. Do the imports, the interface. In this file we are goint to create our POST and DELETE router for the favorite listings. Fill the file in as it shown.

3. Now we need to create a hook that will call thir route. Go to `app/hooks` folder and create a new file called: `useFavorite.ts`. Fill it in.

4. Go back to `components` folder and then into `HeartButton.tsx`. We are going to replace the 2 hardcoded functions we put there (`const hasFavorited = false;` and `const toggleFavorite = () => {};`) for (`const { hasFavorited, toggleFavorite } = useFavorite({ listingId, currentUser });`)

5. Now we are able to like/unlike a listing on the UI, by clicking ON THE HEART ONLY. Do not click on the picture.
