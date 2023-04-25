# IN CONSTRUCTION ⚠️👷‍♂️🏗️🚧

# Build your Airbnb clone from scratch

### Technologies used

pending to clasify

-   Cloudinary CDN API

Framework (front and backend):

-   Next.js 13 (App directory)

Programming Language:

-   Typescript (_npx create-next-app --typescript_)

Front-end:

-   Tailwind CSS (_npm install -D tailwindcss postcss autoprefixer_)
-   React icons: icons (_npm install react-icons_)
-   Zustand: state management solution (_npm install zustand_)
-   React Hot Toast: notifications (_npm install react-hot-toast_)

Back-end:

-   Axios (To make XMLHttpRequests from the browser, to make http requests from node.js, automatically transforms for JSON data) (_npm install axios_)

Database:

-   Prisma (bridge between OOP -our app- and databases --in this case MongoDB--) (to structure and organize the data(tables and relations among them)) (_npm i -D prisma_ and _npx prisma init_)
-   MongdoDB Atlas (cloud) (database host);

Authentication:

-   Auth.js --> But "@next-auth/prisma-adapter" 2023, which is the official primsa adapter for Auth.js / NextAuth.js. (Serves to loggin using several social media profiles/accounts like github, google, facebook, etc.) (_npm install next-auth @prisma/client @next-auth/prisma-adapter_)
-   Bcrypt. A library that helps hash passwords (this means Encrypt passwords changing them into a completely different string made of different characters) (_npm install bcrypt_). For its types: (_npm install -D @types/bcrypt_)

### Features:

-   Tailwind design
-   Tailwind animations and effects
-   Full responsiveness
-   Credential authentication
-   Google authentication
-   Github authentication
-   Image upload using Cloudinary CDN
-   Client form validation and handling using react-hook-form
-   Server error handling using react-toast
-   Calendars with react-date-range
-   Page loading state
-   Page empty state
-   Booking / Reservation system
-   Guest reservation cancellation
-   Owner reservation cancellation
-   Creation and deletion of properties
-   Pricing calculation
-   Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
-   For example we will filter out properties that have a reservation in your desired date range to travel
-   Favorites system
-   Shareable URL filters
-   Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
-   How to write POST and DELETE routes in route handlers (app/api)
-   How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
-   How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
-   How to handle relations between Server and Child components!

### after cloning the repository, install packages

```sh
npm i
```

### set up .env file

```sh
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### npx primsa db push

```sh
npx prisma db push
```

### Start the app

```sh
npm run dev
```

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::: Steps ::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

#### create app

1. Run in the terminal:

```sh
npx create-next-app --typescript
```

Then set up the configuration as following: (in case of being prompted more options, I chose "no");

```sh
give your project a name
ESLint: yes
`src/` directory: no
experimental "app/" directory: yes
import alias:  press enter
```

-   Reference table:
    | CRA | VIte | Next.js |
    |-----|------|---------|
    |Index.j/ts| Main.j/tsx | Layout.j/tsx|
    |App.j/ts| App.j/tsx | Page.j/tsx |

2. Go to global.css and detele everything. Go to page and clean it all up, leave only the main function. Go to layout.tsx to change the name of the tab, the description, to import a font and pass it in the retun of the function. Delete page.module.css.

3. Install Tailwind. Stop the application before installing.

```sh
npm install -D tailwindcss postcss autoprefixer
```

Then run the following command

```sh
npx tailwindcss init -p
```

This creates 2 new files: _postcss.config.js_ and _tailwind.config.js_

4. Go to _tailwind.config.js_. Add the following content to configure template paths:

```sh
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
```

Then go to global.css and add:

```sh
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
:root { height: 100% }
```

5. Run the app again _npm run dev_. You can go to page.tsx and add some classnaames to the div to test if tailwind was succesfully activated.

#### create Navbar UI

1. In app folder, create a new folder called components, and inside create another folder called navbar. In there, create a new file called Navbar.tsx (app/components/navbar/Navbar.tsx). In this file create the main function to export. Now that this file exist, add it in the body of Layout.tsx and import it on top.

-   At some point you will install react icons through the terminal: _npm install react-icons_

```sh
npm install react-icons
```

2. Keep working on the navbar: add style, a container element, logo, search, userMenu, MenuItem etc. Fill in those components of the navbar. Add the corresponding images.

3. Fix the bug we've gotten when we click on things. It's a hydration error. It could be because at this time we are using the experimental app folder (app folder is in development, in experimental phase). If you wanna try to reproduce the error, refresh the page as many times and as it's loading, click anywhere on the screen/UI.

-   Fix: go in to app/components folder and create a file called "ClientOnly.tsx". This is going to check wether we're in server side rendering or not. Fill that file and create the ClientOnly component. Then go to layout.tsx and wrap up Navbar with the CLientOnly component.

#### Authentication UI

1. Create the Modal component. In layout.tsx, add the Modal component above Navbar, always between out ClientOnly tags. Create a folder in app/components/ called "modals". Then create the "Modal.tsx" file in app/components/modals/, fill the modal.tsx with basic structure so i doesn't give errors. Keep working on the modal and add the (imported) components, functions and styles needed.

2. Create Register modal. In the folder /app/ create a new folder called hooks /app/hooks/, in it create a file named: useRegisterModal.ts (((the extension is TS not TSX))).

-   Install the following package: _npm install zustand_. Restart the app. Refresh the browser.

```sh
npm install zustand
```

-   Work on the useRegisterModal.ts file.

3. in the foler "modals" (app/components/modals) create a file named "RegisterModal.tsx" (((the extension now is TSX and not TS))). Create its basic structure.

4. Go to layout.tsx and DELETE the modal component entirely. In it's place, type in the RegisterModal component that we just created and import it on top. Remove the other import we won't use anymore (from Modal).

5. Instal AXIOS (_npm install axios_). Install React-Hooks-Forms (_npm install react-hook-form_).

```sh
npm install axios
```

```sh
npm install react-hook-form
```

-   Restart your app and refresh the browser.
-   Go back to RegisterModal.tsx and import axios, react-hook-form, react-icons, stuff from react and the useRegisterModal. Implement the previously deleted MOdal there and set everything up so it works.

6. Add the functions to the hamburger menu options (log in, sign up). Go to app/components/Navbar/UserMenu.tsx. There import useRegisterModal, grab it as a const, and pass the function in the return.

7. Go back to RegisterModal.tsx to write the body of the modal in a const and pass it in the return.

8. Create the Heading component in app/components/Heading.tsx, fill it in. Import it in RegisterModal. Go give Headings some inputs in RegisterModal.tsx.

9. Create the Input component in a new folder called "inputs". /app/components/inputs/Input.tsx. Fill it in. Place it under Heading component in RegisterModal.tsx. Add 3 inputs in total: name, email and password. If you are succesfull, if you click submit on the form and they inputs are not filled, it should show an error by changing the ouline to red. Also in the console you should be able to see an error from Axios, because the server doesn't exist yet.

10. Install React-hot-toast (_npm install react-hot-toast_). And restart your app and refresh the browser. (for notifications).

```sh
npm install react-hot-toast
```

-   Got to /app/ and create a new folder called "providers". Inside, create a new file called "ToasterProvider.tsx". Fill it in with basic structure. Import Toaster in it and return the Toaster component imported. With this type of packages, we cannot simpli import it wherever we want to use it, but we need to create one instance in our app with a function so we can use that wherever we want.

-   Go to layout.tsx. Inside the ClientOnly tags and above RegisterModal tag, add the ToasterProvider tag.
-   Now that we have this Toaster Notifications, we are going to replace the way we show erros in the UI. Go to RegisterModal.tsx and in the onSubmit function, in the .catch section, delete the console log. and replace it with toast.error("message") and don-t forget to import it.

11. Let's create placeholders for register with github and google. In RegisterModals.tsx, create the "const footer". Pass the props and if you place Footer propo in MOdal. You shoul see the button with the google icon. For the github button, copy and paste the setup for the google one and change the data to fill it.

#### Functionality of Register, MongoDB, Prisma setup

1. Install Prisma in the terminal

```sh
npm i -D prisma
npx prisma init
```

Prisma instructions in the terminal - - - - - - -
_Set the DATABASE_\_ _URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started_
_Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb._
_Run prisma db pull to turn your database schema into a Prisma schema._
_Run prisma generate to generate the Prisma Client. You can then start querying your database._

---

2. Search on internet "mongo db atlas", go to the official website and create a new project, create then a new database, make sure to choose the free option. Then set up the username and password (admin, admin). For the IP, to avoid problems it's better to put the following: "0.0.0.0/0". Then accpet everything. Click on "connect". Choose connect with VSCode: we are not going to connect with VSCODE but we need the type of link this option provides

```sh
mongodb+srv://admin:<password>@clusterairbnb.ax6rhq7.mongodb.net/test
```

3. Go to Public folder, and in there you should see an .env file (public/.env). In there you will see a constant called DATABASE URL with a string associated to it. Replace that string with the one we copied from mongodb atlas. Make sure to leave the quotation marks. Once done that, chance the componen >password< in the url for the actual password. Make sure you have "/test" at the end of the string, or whatever your database is, otherwise prisma won't work.

```sh
mongodb+srv://admin:admin@clusterairbnb.ax6rhq7.mongodb.net/test
```

4. There's a new folder called "PRISMA" that was created when we installed prisma. Inside it has a file named "schema.prisma". In there, change the datasource db provider value to "mongodb".

```sh
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

-   ATTENTION HERE: if "schema.pisma" 's text is all plain white, if you dont' see it in colors, it means you are missing an extension. Install the extension "Prisma" on the VSCode Store.

-   DATABASE: Continue to work on prisma/schema.prisma file to make it ready. Create all the queries for the TABLES in the database and connect among them.

5. Now that the database queries are done. We need to push this to our database. Go to mongodb(cloud), click Browse collections. You wont see anything because we haven't pushed our queries yet. So, now we're going to run a command that will push the queries to the DB.

-   To push the queries to the DB, in the terminal type:

```sh
npx prisma db push
```

-   Terminal must show a successful message
-   Go to Browse Collections in Mongo DB cloud, or click refresh if you were already there, and you should be able to see all the 4 tables created.

6. Implement Auth.js. This technology is used for authentication to our website when logging in. It allows the user to log in using one of their already existing accounts like google, facebook, github, etc. In this case, we are going to use an official adapter for Next.js and Prisma, which is called: "@next-auth/prisma-adapter".

To install @next-auth/prisma-adapter type the following 3 packages in the terminal:

```sh
npm install next-auth @prisma/client @next-auth/prisma-adapter
```

7. Install another package that will help us with personal login, that is "bcrypt". In the temrinal run:

```sh
npm install bcrypt
```

-   and then install its types:

```sh
npm install -D @types/bcrypt
```

8. Create our Prisma DB Util. In the /app/ folder, create another folder called "libs". Inside that folder, create a file called "prismadb.ts" (/app/libs/prismadb.ts). Fill it in. We are creating this PrismaClient global variable because it has an impact in the whole code. It's a better practice to do this. Technically we could import the PrismaClient everywhere in the code, but it would creat a lot of "new Prisma Client" instances and would give us warnings in the terminal. This all because of Next.js hot realoding. So this solution helps prevent that and it's also cleaner and best practice.

9. Create our "next-auth" file. As of March 27th 2023, NextAuth DOES NOT SUPPORT the app/api YET. So we cannot create a "next-auth" file inside the /app/ folder. This is the only instance where we need to use the "Pages" instance. Don't worry, the "Pages" api won't be depricated for a very longtime, because of the migration period Next.13 needs to allow. SOOOOOO, let's create the folder /pages/ in the project folder.

-   In the project folder, create the /pages/ folder. Inside of that create a new foler called /api/. Inside, create a new folder called /auth/. And inside create a new file called "[...nextauth].ts" ---> "projecFolder/pages/api/[...nextauth].ts"

-   Fill in this new file. It,s very complicated this part. We are defining the Autentication part of our login: using google and/or github credentials, and using email and password. We're using the technologies we installed to work with encrypted passwords and more security aspects. This is where we decide if we allow the user to log in or not. VERY IMPORTANT.

13. Set up "NEXTAUTH_SECRET" in .env file. Go to ".env" file and add in it: "NEXTAUTH_SECRET=thisIsOurSecret". The secret is the one we wrote in the "[...nextauth].ts" file. IN THIS CASE ONLY is the same as the variable because we decided it to be like that. In this case, the line of code we have to add to ".env" file is:

```sh
NEXTAUTH_SECRET="NEXTAUTH_SECRET"
```

14. Now we're going to create our Route (backend) that we used in our RegisterModal before, using AXIOS. Go to app folder, then delete the hello folder it has because we're not going to use it. In /app/ create a new folder called "register", in it create a new file called "route.ts"... (/app/api/register/route.ts). Fill it it creating the function to make a http POST request.

-   If everything was well done. Then you can save modifications, refresh your app and then create a new user. It should work, if you inspect or press F12 you can see the process being succesful. Also if you go to mongo db atlas , you will see the first user created in the USER table. We are using the AXIOS code we set in _RegisterModal_ to treat the post request. We set up the post request in _route.ts_. We canalize the request through _schema.prisma_, here also we set up where are we sending the request, to what database, we used the URL from the _.env_ file.

-   (((parenthesis: axios is used to make/treat http requests. Express is used to build up the server. Express servers the website pages /, /logging, /users.... Axios deals with the requests made (get, post, delete...))))

#### Manueal Login functionality

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

#### Google and github authentication login

### Start the project:

```sh
npm run dev
```

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

### Credits:

[Code With Antonio](https://www.youtube.com/watch?v=c_-b_isI4vg)
