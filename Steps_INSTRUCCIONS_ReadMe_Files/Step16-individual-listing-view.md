## error fix

-   We are receiving a warning (again) because of the date format not supported. To fix it:

1. Go to `app/actions/getListings.ts`. And instead of retuning just `listings` we are going to return `SafeListings`. We have to create a constant before defining SafeListings.

2. For it to work, we have to go create a Type for this. Go to `app/types/index.ts`. There on top we are going to create the type we are going to export. Don't forget to import prisma.

3. Now that we can use our `SafeListing`, let's go to `page.tsx` and delete the type of listings in the return section. But now we have to go to the `<ListingCard>` component to fix it there as well, in the interface section change the type of data to SafeListing, and import it.

## Individual listing view: creating a single (detailed) page for each item/product in the listing.

-   before doing the following, if you click on any of the items presented in the listing. You are redirected to an unexistant page. This throws later and error. We are going to fix that.

1. Go to `app` folder and inside it create a new folder called `listings`. Inside, we are going to create another folder called `[listingId]`. And inside we're goint to create a file called: `page.tsx`. This is the complete path: `app/listings/[listingId]/page.tsx`.

2. Give the basic structure to this new file as any other file with a function and and export.

-   From now on, if you click on an item/product in the listing section, you should be redirected to a existing product page without having any error. What the website will display is out `listings/.../page.tsx` we just created. With a URL like this `http://localhost:3000/listings/644d7b19aad55204253147a1`.

3. In order to load this individual listing/product page using the ID we have in the parameters (url) (taking the id from the url). We need to create an action. so go to `app/actions` folder and create a new file called: `getListingById.tsx`. Again: THIS IS NOT A ROUTE but a direct communication from the server component to the database. FIll this file like it is in the final version.

4. Now that we have our action. Go back to `listings/.../page.tsx` and add it in the body of the function. WHY ARENT WE USING NEXT/NAVIGATION ?? Because this is a server component. We cant use hooks. So, fill this page and in the return we are going to use another new component called `<ListingClient>`.

5. Go to `app/listings/[listingID]/` folder, and just right next to out `listings/../page.tsx` create `ListingClient.tsx`. Create the basic sctructure to export it. Import in page.tsx. Now we,re going to extract the category, our category object hast a string and the icon, so we need to extract them separately. Now we're going to style the return section. FOr the return we are going to need more components: `<ListingHead>`, `<ListingInfo>` and `<Listingreservation>`.

6. Create the `<ListingHead>` component in `app/components/listings` folder. Fill it in. In the same folder create `<ListingInfo>` and `<Listingreservation>` and fill them in. They will need more compontents maybe so creat them as well.
