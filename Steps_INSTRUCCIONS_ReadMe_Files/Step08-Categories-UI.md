#### CATEGORIES UI

Let's create a categories bar below our navbar.

1. Inside the navbar folder create a new file called `Categories.tsx` (`app/components/navbar/Categories.tsx`)and set the default structure to export its function. Go to `app/components/navbar/Navbar.tsx` and in the return section, before the last closing div tag place the `<Categories/>` component. Don't forget to import it on top of the file.

2. Add style to `Categories.tsx` in the return section. Also create an constant carrying an array with all the different categories. In the return section, we're going to map this array and return a `<CategoryBox/>` component for each item. We haven't created it yet, so it may throw an error.

3. Create `CategoryBox.tsx` in `app/components/` folder. Add the basic structure. Add the interface for the types, pass it to the main function and keep styling. Now, when we want that when we click on a category, it loads new listings. The way it does it is by assigning a router parameter. Add `"use client"` on top.

4. Add `router` and `parameter` in the main function before the return section. These two come from `next/navigation`.also import them on top of the file, the add this to the body of the code `const router = useRouter();` and `const params = useSearchParams();`. Then create a `handleClick` function in the return div and also elaborate it before the the return section. In it, we're going to define the current query, but we need to install a package first: `query-string`

```sh
npm i query-string
```

-   We'll use this package to check if we have params at all, because params can be type null. If there are parameters, then we'll make an object out of all our current parameters in the future we're gonna have lots of parameters because we're going to store a bunch of things in our URL, including: search location, start and end date of future vacations, number of guests, number of rooms. we want to be careful and not remove any of those parameters every time we click on a category. Install it. Import it on top `import querystring from "query-string";`. And use it to catch the current query `currentQuery = querystring.parse(params.toString());`.

-   Lets keep building this code: now, imagine you have selected a category and it's showing you the listing. if you click again on the same category, it should remove the selection and reset the categories. Add that ///// We,re also adding a function to create a new URL with the new params and push it to the router.

5. Just to be clear, this `CategoryBox.tsx` file has the funciton of displaying each category and its icon AND modifying the URL according to the category chosen. The display of the items will be done in another file based on the URL search params we just created.

6. We're going to make the categories to read from the URL and show a selected option of itself. Go to `Categories.tsx`. Add params `const params = useSearchParams();` and import it, the same iwth parthname. Extract the categories with a const. Add the conditional. In the return section, replace "description" `selected={item.description}` with "selected" `selected={category === item.label}`.

7. Let's add another option to clean the categories selected (or to unselect them all, or clear categories). That will be when you click on the LOGO of the website, all categories should be cleared. In `app/components/navbar/Logo.tsx` add the onClick function to the `<Image>` component, like this: `onClick={() => router.push("/")}`.

-   Finally, make sure all components have "use client" on top.
