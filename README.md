# Build your Airbnb clone from scratch

## DEMO

[Click here to access the demo](https://fullstack-apartment-rental-project-for-learning.vercel.app/)

### Technologies used

Framework (front and backend):

-   Next.js 13 (App directory)

Programming Language:

-   Typescript (_npx create-next-app --typescript_)

Front-end:

-   Tailwind CSS (_npm install -D tailwindcss postcss autoprefixer_)
-   React icons: icons (_npm install react-icons_)
-   Zustand: state management solution (_npm install zustand_)
-   React Hot Toast: notifications (_npm install react-hot-toast_)
-   React-spinners: visual loader animations (_npm install react-spinners_)
-   React-date-range: A date library agnostic React component for choosing dates and date ranges. It uses "date-fns" (another package) for date operations. It has date-picker, date-range, calendar and defined-range (_npm install react-date-range_)
-   React-date-range: TYPES: _npm install -D @types/react-date-range_
-   Leaflet / react-leaflet (_npm install leaflet_, _npm install -D @types/leaflet_, _npm install react-leaflet_)
-   React Select: displays a dropdown menu (_npm install react-select_)
-   World-countries (_npm install world-countries_)
-   Query-String: Parse and stringify URL query strings (_npm install query-string_)
-   Cloudinary (package and CDN) API (_https://cloudinary.com/_, _npm install next-cloudinary_)

Back-end:

-   Axios (To make XMLHttpRequests from the browser, to make http requests from node.js, automatically transforms for JSON data) (_npm install axios_)

Time and dates manipulation for front and back end:

-   date-fns: toolset for manipulating JavaScript dates in a browser & Node.js. (_npm install date-fns_)

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

::::::::::::::::::::: Steps ::::::::::::::::::::::

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

13. [Listing creation: Descrition and Price, Listing creation POST route. STEP 4](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step13-Listing-creation-description-price.md)

14. [Fetching listings with server components (Listing card component, direct server action)](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step14-fetch-lists-server.md)

15. [Favoriting functionality](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step15-favorites-listings.md)

16. [Individual Listing view](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step16-individual-listing-view.md)

17. [Listing reservation component](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step17-listing-reservation-component.md)

18. [Reservation functionality (routes, logic)](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step18-reservation-functionality.md)

19. [Trips screen (Loading trips with server component)](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step19-trips-screen.md)

20. [Reservations screen (Loading guest reservations with server component)](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step20-reservations-screen.md)

21. [Favorites screen (Loading your listings with server component)](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step21-favorites-screen.md)

22. [Properties screen (loading your listings with server component)](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step22-properties-screen.md)

23. [Filters modal (Assigning various filters, add advanced querying logic to getListings, add loading and error pages)](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step23-filters-modal.md)

24. [Vercel deploy and wrap-up](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Steps_INSTRUCCIONS_ReadMe_Files/Step24-Vercel-deploy-wrapup.md)

## Start the project:

```sh
npm run dev
```

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::

## Credits:

[Code With Antonio](https://www.youtube.com/watch?v=c_-b_isI4vg)
