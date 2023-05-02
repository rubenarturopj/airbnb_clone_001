## Filters modal (Assigning various filters, add advanced querying logic to getListings, add loading and error pages)

### Create the search modal

1. Go to `app/hooks` folder, copy and paste `useLoginModal.ts` and rename it to `useSearchModal.ts`. Then change all the variables inside as well.

2. Go to `app/components/navbar/search.tsx` and start editing/adding stuff. Add a constant and add an onClick function for the first div.

3. In `app/components/modals` folder, create a file called: `SearchModal.tsx`. Fill it in as shown. Although it's not over yet, we'll keep editing here later. Don't forget to type: "use client" on top.

4. Go to the main `layout.tsx` file. And add the component `<SearchModal>` we just created between `ToasterProvider` and `RentModal`.

5. Go back to edit `SearchModal.tsx`. Here we're gonna add a lot of things to make our modal work, like bring back map, the date range package, the function to move forwards and backwards in our steps, to submit the modal, to the functions to create url parameters to do the search, check the number of rooms guests and bathrooms, etc. Style the return depending on steps, this is very complex, check the file for more info.

6. If you click "search" in the end. You will the the URL has lots of params in it. GREAT.

### Set filters for the 3 options on top of the UI (anywhere, any week, add guests)

1. Go to `app/actions/getListings.ts`. We are going to modify the returning listings taking in consideration the parameters in the URL. After a lot of coding here, we should be able to look for reservations available through the search modal. It won't show listings already reserved in the same dates we want it.

2. Create lots of listings (apartments on rent) to display and explore the website

### Create the Loaders

1. Go to `app` folder and create a file called `loading.tsx`. Give it the normal regular structure basic. This file will be used as a loading screen before loading all our website. Inside this file, we will use another component we haven't created yet.

2. Go to `app/components` folder and create a file called: `Loader.tsx`. Mark it as "use client" component on top of the file.

3. Shut down the application, install the following package, at the end run the app again and refresh the browser. This package has lots of cool loading animations to display while we load our app.

```sh
npm install react-spinners
```

4. in `loading.tsx` import the `<loader>` component from `Loader.tsx`.

5. In `Loader.tsx` style the return section with an animation. We chose a circle or sequence of rings in red color.

### Create the error page

1. in `app` folder, create a new file called `error.tsx`. Mark it as "use client". Give it the basic structure and the main function call it `ErrorState`.

2. Import what you have to import. Create the interface. Pass these interface props to the main function. Bring useEffect, and style the return.

-   This will catch any error that happens.
