## Listing creation: Descrition and Price, Listing creation POST route. STEP 4

1. Go to `RentModal.tsx` to write the last if contidional for step 4, that is DESCRIPTION. In the `bodyContent` return a `Heading`, and 2 `Input` that we have already created. And add their properties; one of these properties will be `disabled={isLoading}`. We don't have this `isLoading` yet, so we are going to create a `useState hook` for that.

2. Then we are going to creat the last IF statement for step 5, which will be PRICE (with a value of 5). Create it in `RentModal.tsx`. After creating it, the UI should display a price of $1. This comes from the useForm const where we assigned default values.

3. We are goint to create the function for `handleSumbit`. So, first we are going to create the `onSubmit` function. In `RentModal.tsx`, below the `onBack` and `onNext` constants, create the `onSubmit` function. This function will be called every time we click on the NEXT button. So every time we click it, we will check if we are on the last step, if we AREN'T, then it's going to call the next function to let us advance on the modal. If we are in the last step, we're gonna change the `isLoading` state, and we are going to call `axios` (don't forget to import it) and we're going to make a POST request, finish the then and finally catches. Also import `toast`. Add the constant `router`.

-   The endpoint created in the tutorial doesn't exist yet, `"/api/listings"` does not refer to a database on the web, but to a path in our app code, folder api, then folder listing. That's where I'm sending the information gathered from the form to be processed later.

4. Now that we have this funcion, we are going to go to the bottom, to the main return section, in there, our `Modal` has a property called `onSubmit` with a value of `onNext`. We are going to change this value for `handleSubmit(onSubmit)` so we can call the submit handler.

#### Creating the endpoint for the axios request

1. Go to `app/api` folder. There create another folder called `listings`. The folder is `app/api/listings`. In this folder create a `route.ts` file.

2. Import `NextResponse`, `prisma` and `getCurrentUser` on top. We are going to type the fetch POST request. First check if there's a user in the database, if there isn't throw error. If there is, then extract all the information we want and iterate over them to check that none of them is missing, as they all are required. if one is missing then throw error.

-   Author said the previously mentioned function does nothing and it can be removed if desired.

3. At the end, we are receiving the information from the form filled in the UI, form which is coded in the `RentModal.tsx`. We are receiving this data, and we are destructuring it to later restructure it but this time in the format needed to be sent to the database (blueprint is in `schema.prisma`). We are receiving 9 properties(`title, description, price, location, number of bathrooms, number of rooms, etc.`), we are going to add a 10th which is going to be the `userID`. Now that we hve the new object, we are going to send it to the database.

-   If you try now to create a listing, it should work perfectly.
