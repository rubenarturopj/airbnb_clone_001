#### Listing creation: Category selection

-   Making sure we're loggin to be able to click on Airbnb your home.

1. Go to `components/navbar/UserMenu.tsx`. Search for the div that contains `Airbnb, your home`. We are going to replace the empty function. Create a function on top called `onRent` ebfore the return section.

2. Elaborate the function: if we are logged in, we will be able to use the Rent Modal (that we haven't built yet). If we're not, the website will ask us to log in.

-   Create our Rent Modal.

1. Go to `app/hooks` folder an copy `LoginModal.ts` in the same folder, rename it to `useRentModal.ts`. Rename everything inside to `RentModal`

2. Create a new file called `RentModal.tsx` in the components folder `app/components/modals`. Fill it with its corresponding structure. Make sure to add "use client" on top.

3. Go to `layout.tsx` and add the new created modal to it above the `<LoginModal>` component. Import it.

4. Got to `navbar/usermenu.tsx` and add the respective code to the `onRent` function in order to make rentModal open. Go below in "usermenu" to the part where you are returning the `<MenuItems/>`, add `rentModal.onOpen` in the `onClick` function belonging to `Airbnb my home`. Cool.

5. Go back to `RentModal.tsx`. Create an `enum` calles STEPS. Once that done, let's add the controls for STEPS in the main section (this means create a the functions to control them). Once done, add `actionLabel`, `secondaryAction` and `secondaryActionLabel` to the Modal component in the return of the main function.

6. Let's create the `body content` still in `RentModal.tsx`, we'll use LET instead of CONST because we wanna change it dynamically. Map over the importet categories array. Create another component to display this categories called `<CategoryInput/>`. You can create the `CategoryInput.tsx` file in `app/components/input/CategoryInput.tsx`. Don't forget to import it. Fill it in with it's coresponding data.

7. Connect the options to select category we just created with our form. Go back to `RentModal.tsx` and on top we'll have to initialize _our form_ the same way we did in the `LoginModal` and `RegisterModal`. We are building a form to create the LISTING table in the database (the schema is the in the file schema.prisma). So, make all the setup to do this, you will at some point go to the return section and modify the `onClick` and the `selected` properties of the `<CategoryInput>`.

-   if you click on a category now, it should display selected (but only the UI set up so far, what we can see on the scren, it is not connected yet to the display listings nor anything else).
