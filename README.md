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

1. [Create App](https://github.com/rubenarturopj/airbnb_clone_001/blob/main/Step01-CreateApp.md)

2. Create Navbar UI

3. Authentication UI

4. Functionality of Register, MongoDB, Prisma setup

5. Manual Login - Functionality

6. Google and Github Authentication login

7. Polishing login/register modals

8. Categories UI

9. Listing creation: Category selection

10. Listing creation: Location selection, Map component, Country autocomplete. Step 0 and 1.

11. Listing creation: Counter components (how many bathrooms, guests, rooms). Step 2

#### Listing creation: Counter components (how many bathrooms, guests, rooms). Step 2

1. Go to `RentModal.tsx` and find the IF statement conditional that belongs to the step 2 = INFO. Create the `bodyContent` value. Add 3 `<counter/>` component, and horizonal lines among them to separate them `<hr/>`. We have yet to create this component.

2. Create the component in a file named `Counter.tsx` in `app/components/input`. Make sure to mark it as "use client". Create an interface for the props. Create the functions `onAdd` and `onReduce` in the main function. Work on the return section and its styling.

3. In `RentModal.tsx`, add the `value` property to each `Counter` component. Create its const on top that you will pass as this value. Later, add the `onChange` function property to each `Counter` component and add an arrow function like this: `onChange={(value) => setCustomValue("name-of-the-value", value)}`. Now that this is done, we can change the value of the guests, the rooms and the bathrooms in the UI.

#### Listing creation: Image upload, Cloudinary CDN. STEP 3

1. Go to `RentModat.tsx` and create and IF statement to render another `bodyContent` if `STEP` matches `3`, which is `IMAGES`. Add the `<Heading/>` component and we will use a new component called `<ImageUpload/>` component from `ImageUpload.tsx` that we'll create in `app/component/input` folder. Don't forget to mark this new file as "use client".

2. Create an account in `Cloudinary`. Go to `Google`, search for it. Create your free account. Enter and on the dashboard (left panel) you can see your Cloud name, your API key, API secret and API Environment.

3. Install the `Next Cloudinary` package.

```sh
npm install next-cloudinary
```

-   We'll add this line of code as well to our project, replacing the last part with your cloud name, in our `.env` file:

```sh
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

4. Let's code the `ImageUpload.tsx` file and style it. Everyting's set and if you try up upload a picture. It should work until the part where you actually press the final submit /upload picture button. There it won't work because it's not ready yet. We need to add this const to our code `const uploadPreset = "<your preset>";`. You can get this preset you have to get it from Cloudinary website. GO to the website, settings on left panel, click on `Upload`. On the right panel, you'll find a section called `Upload presets`, click on `Add upload preset`.

5. For the "Upload preset". The `signing mode` must be `unsigned`. Copy the `upload preset name` on top, and then click on `save`. Once that done, go back to your code and on `ImageUpload.tsx` and create a constant to carry the string you copied. Then find the `uploadPreset` and paste the const value you just created.

6. If you upload a picture, it will throw and error because we haven't passed the `onChange` function. BUT if you go check on cloudinary, the image you uploaded will be there.

7. Go back to `RentModal.tsx` and to the `<ImageUpload/>` component add the value and onchange proterties. DOnt, forget to add the constant that will watch for `imageSrc`.

8. If you try again to upload a picture. It will trigger another error. Copy the hostname the error gives you (`res.cloudinary.com`), then go to `next.config.js` and paste it in the `images.domains` array. After this step SHUT DOWN your application and restart it. It all should work now. Good job.

#### Listing creation: Descrition and Price, Listing creation POST route. STEP 4

:::::::::::::::::::::::::::::::::::::
ME QUEDÉ EN EL VIDEO: 4H 17 MIN 12 S
:::::::::::::::::::::::::::::::::::::

#### Fetching listings with server components (Listing card component, direct server action)

#### Favoriting functionality

#### Individual Listing view

#### Listing reservation component

#### Reservation functionality (routes, logic)

#### Trips screen (Loading trips with server component)

#### Reservations screen (Loading guest reservations with server component)

#### Favorites screen (Loading your listings with server component)

#### Properties screen (loading your listings with server component)

#### Filters modal (Assigning various filters, add advanced querying logic to getListings, add loading and error pages)

#### Vercel deploy and wrap-up

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
