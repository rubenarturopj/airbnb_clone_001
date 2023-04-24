# Build your Airbnb clone from scratch

### Technologies used

-   Next.js 13 (App directory) with Typescript (_npx create-next-app --typescript_)
-   Tailwind CSS (_npm install -D tailwindcss postcss autoprefixer_)
-   Prisma
-   MongoDB (cloud)
-   NextAuth 2023
-   Cloudinary CDN API

Front-end packages:

-   React icons: icons (_npm install react-icons_)
-   Zustand: state management solution (_npm install zustand_)
-   React Hot Toast: notifications (_npm install react-hot-toast_)

Back-end packages:

-   Axios (_npm install axios_)
-   Prisma (bridge between OOP and databases) (_npm i -D prisma_ and _npx prisma init_)

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

-   Continue to work on prisma/schema.prisma file to make it ready.

### Start the project:

```sh
npm run dev
```

### Credits:

[Code With Antonio](https://www.youtube.com/watch?v=c_-b_isI4vg)

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
