## Filters modal (Assigning various filters, add advanced querying logic to getListings, add loading and error pages)

### Create the search modal

1. Go to `app/hooks` folder, copy and paste `useLoginModal.ts` and rename it to `useSearchModal.ts`. Then change all the variables inside as well.

2. Go to `app/components/navbar/search.tsx` and start editing/adding stuff. Add a constant and add an onClick function for the first div.

3. In `app/components/modals` folder, create a file called: `SearchModal.tsx`. Fill it in as shown. Although it's not over yet, we'll keep editing here later. Don't forget to type: "use client" on top.

4. Go to the main `layout.tsx` file. And add the component `<SearchModal>` we just created between `ToasterProvider` and `RentModal`.

5. Go back to edit `SearchModal.tsx`. Here we're gonna add a lot of things to make our modal work, like bring back map, the date range package, the function to move forwards and backwards in our steps, to submit the modal, to the functions to create url parameters to do the search, check the number of rooms guests and bathrooms, etc. Style the return depending on steps, this is very complex, check the file for more info.

6. If you click "search" in the end. You will the the URL has lots of params in it. GREAT.

### Modify getListings action

1. Go to `app/actions/getListings.ts`. We are going to modify the returning listings taking in consideration the parameters in the URL.

### Set filters for the 3 options on top of the UI (anywhere, any week, add guests)

### Create Modal to edit these options

:::::::::::::::::::::::::::::::::::::

ME QUEDÉ EN EL VIDEO: 7 H 53 MIN 39 S

:::::::::::::::::::::::::::::::::::::
