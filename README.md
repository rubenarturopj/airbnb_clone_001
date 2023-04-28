# UNDER CONSTRUCTION

# ⚠️👷‍♂️🏗️🚧

# Build your Airbnb clone from scratch

### Technologies used

pending to clasify

-   Cloudinary (package and CDN) API (_https://cloudinary.com/_, _npm install next-cloudinary_)
-   FRONT>BROWSER> Query-String: Parse and stringify URL query strings (_npm install query-string_)
-   World-countries (_npm install world-countries_)
-   React Select: displays a dropdown menu (_npm install react-select_)
-   Leaflet / react-leaflet (_npm install leaflet_, _npm install -D @types/leaflet_, _npm install react-leaflet_)

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

#### Steps to create your Airbnb clone

1. [Create App](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step01-CreateApp.md)

2. [Create Navbar UI](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step02-Create-Navbar.md)

3. [Authentication UI](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step03-Authentication-UI.md)

4. [Functionality of Register, MongoDB, Prisma setup](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step04-Functionality-Register-MongoDB-Prisma.md)

5. [Manual Login - Functionality](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step05-Manual-login-functionality.md)

6. [Google and Github Authentication login](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step06-Google-Github-Authentication.md)

7. [Polishing login/register modals](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step07-Polishing-login-register-modal.md)

8. [Categories UI](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step08-Categories-UI.md)

9. [Listing creation: Category selection](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step09-Listing-creation-category-selection.md)

10. [Listing creation: Location selection, Map component, Country autocomplete. Step 0 and 1.](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step10-listing-creation-location-map-country.md)

11. [Listing creation: Counter components (how many bathrooms, guests, rooms). Step 2](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step11-listing-creation-counter-components.md)

12. [Listing creation: Image upload, Cloudinary CDN. STEP 3](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step12-listing-creation-image-upload-cloudinary.md)

13. Listing creation: Descrition and Price, Listing creation POST route. STEP 4

:::::::::::::::::::::::::::::::::::::
ME QUEDÉ EN EL VIDEO: 4H 17 MIN 12 S
:::::::::::::::::::::::::::::::::::::

14. Fetching listings with server components (Listing card component, direct server action)

15. Favoriting functionality

16. Individual Listing view

17. Listing reservation component

18. Reservation functionality (routes, logic)

19. Trips screen (Loading trips with server component)

20. Reservations screen (Loading guest reservations with server component)

21. Favorites screen (Loading your listings with server component)

22. Properties screen (loading your listings with server component)

23. Filters modal (Assigning various filters, add advanced querying logic to getListings, add loading and error pages)

24. Vercel deploy and wrap-up

## Start the project:

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
