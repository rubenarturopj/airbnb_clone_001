#### Manual Login functionality

1. Enable login modal functionality. To do that, we will create a hook to control whether our modal load is open or close. ====> Got to `/app/hooks/useRegisterModal.ts` and copy the file in the same folder. Rename the new file to `useLoginModal.ts`. Rename everything that contains `registerModal` into `loginModal`. The rest stays the same.

2. Go to `app/components/modals/RegisterModal.tsx` and copy that file in the same folder. Rename it to `LoginModal.tsx`. Rename the main functin and the export.

3. Find a way to enable the new modal. Go to the return section in `app/layout.tsx`. Copy the `<RegisterModal/>` component, duplicate it and rename it to `<LoginModal/>`. Also import it.

4. Go to `app/components/modals/LoginModal.ts`. We need to change what controllers we are going to use. Add the corresponding function `const loginModal = useLoginModal();`, import it on top. Then go to the return section and change the value in `isOpen` and `onClose` to `isOpen={loginModal.isOpen}` and `onClose={loginModal.onClose}`.

5. Go to `app/components/navbar/UserMenu.tsx` and in the beginning of the main function add `const loginModal = useLoginModal();` and in the return MenuItems corresponding to Login, add: ` onClick={loginModal.onOpen}`. If we click in the button for Accounts in the website, and select "log in" the modal should appear again. This modal is the same from create a new account because we just copied pasted. Now we need to style it for a log in modal.

6. Go to `app/components/modals/LoginModal.tsx`. Change the title and the subtitle. Detele the name input. Also delete the field name fromthe function for form control. replace `Axios.post()` with the `signin` option from `auth.js`. So, import `import { signIn } from 'next-auth/react';`, the go to the `onSubmit` function and remove all the `axios.post()` function. Add instead the whole `signIn` function and import the `router` on top of the main function and also import it on top of the document from `next/navigation`.

7. Bug fix. We placed our `[...nextauth].ts` file in the wrong directory. So go `apges/api` and create a new folder called `auth`. Then drag and drop `[...nextauth].ts` in it.

8. Attempt to log in the website. Create a user first, if necessary.

9. There's currently no way to tell if you are logged in or not. This a cool way to fetch User Data with this in Next.js 13 using server component. For that go to `/app/` folder and create a new folder called `actions`. In it, create a new file called `getCurrentUser.ts`. ==> `app/actions/getCurrentuser.ts`.

10. In there, import `{ getServerSession }`. Then import `authOptions` from `[...nextauth]`; Import `prisma`. Crate the async function to export the session, create also the getcurrentuser function.

11. We are goint to use this functions in `pages/layout.tsx`. This `layout.tsx` is by deafult a server component. You could have wrote the code in step 10 in this page but we did it separately to keep a nice structure. Anyway. Here, in the main function, and befor the return, create a const that will carry the value of `getCurrentUser` and import it on top. Because we're using away to catch the previously mentioned function, then we need to transform our main function `RootLayout` into an _async_ function. Now pass that const as a prop in the `<Navbar/>` component in the following way `<Navbar currentUser={currentUser}/>`, that way we will have acces to the user info in the navbar. But of course it's gonna mark error because we haven't specified the types for this prop.

12. Go to `app/components/navbar/Navbar.tsx` and create an interface for the types. THen add this props to the function.

13. We are going to use this `currentUser` to display a logout function. We are going to pass this value into `<UserMenu/>` component. Then we need to go to `UserMenu.tsx` to add types for this prop we just passed. When creating the `interface`, remember to import `user` from `prisma`. In the return, fin the div with the login/signup items, and add a conditional, also add all the other options we are going to display in the dropdown hamburger menu once we have logged in: my trips, my favs, my reservations, my properties, Airbnb my home, logout.

14. For the logout option. In the function part, add the `signOut` from Next-auth and import it on top.

-   Now you can test our app by creating a user (user will be stored in the database), then loggin in (we will fetch user info from the dabase). When you login, the items on the drowdown hamburger menu will be different. If you Logout, this items will change once again =) yaay.

-   Before we pass to the next part, let's address the warnings we've been getting on the console while browsing our website. The warning is: Only plain objects can be passed to Client Components from Server Components. Dale objects are not supported. In the prisma's schema, one of the parameters of the schema is `emailVerified, createdAt, updatedAt:`. These elements can be verified in `schema.prisma`.
-   Go to `getCurrentUser.ts` in `app/actions/getCurrentUser.ts`. And instead of just returning a plain current user we will return an object that will contain the currentUser we had but with certain modifications on some properties; these certain proterties will have the same date values but transformed into a string (instead of the date format). To do that, we will use the `.toISOString()` function.
-   This last step triggered another error in `layout.tsx`, so we're going to head to that file to do investigate. We found out the reason of the error is because we're passing the 3 previously mentioned values as strings, while in the interface we set them as Date format. To fix that, we're going to create another file called `types` in `app/types/`, inside create another file called `index.ts`. In this file we are going to create the safe types, don't forget to import.
-   Once that done, go to `app/components/navbar/Navbar.tsx` and replace `User` in the interface, for `SafeUser`, import it from `@app/types`, and delete the other import of `User`. Now go to `app/components/navbar/userMenu.tsx` and do the same in `getCurrentUser`. Here we're gonna replace some properties' values from the object for the same values but in string format instead of a Date format.