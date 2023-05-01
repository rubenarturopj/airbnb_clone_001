## Listing: reservation component

-   In the previous step, we were creating the components `ListingHead` `ListingInfo` and `ListingReservation` used in `ListingClient`.

-   We covered the first two but we have the last one still pending to create.

-   This component will display a calendar where users will be able to select the dates of their reservations.

1. Go to `app/listings/[listingId]/ListingClient.tsx` and there create a constant

2. pass the interface props to the main function and give "reservations" a value of an empty array.

3. Go to `ListingClient.tsx` and add loginModal, router, create a disableDates function. Then we're going to creat states and functions to create the actual reservation. Once that is donde, we have to create another pending component for the return section.

4. Create the last missing component `<ListingReservation>` next to the previous ones in the `app/components/listings` folder. Add the component `<ListingReservation>` to our `ListenClient.tsx`, even though it's not finished but so we can see the modifications we make on it later.

5. This will be our calendar to set reservaiton dates. While we are typing this new component, we need to install another package for a library and then its types. Remember to stop your application, then restart it again after the installation is over and refresh your browser.

```sh
npm install react-date-range
npm install -D @types/react-date-range
```

-   Then keep styling and typing. You'll reach a point where you need to add a `<Calendar>` component.

6. Create a new file called `Calendar.tsx` in `app/components/inputs` folder. Give it the basic structure. Add this component to `Listing Reservation`. Now let's style it and fill it in. Import what you have and also IMPORT THE CSS FROM REACT-DATE-RANGE.

-   Now you'll see a calendar. But you'll see also that the calendar does'nt fit the whole box it is in. So, go to `app/global.css` and add the following `.rdrMonth {width: 100% !important} .rdrCalendarWrapper {font-size: 16px !important; width: 100% !important}`.

7. Go to `ListingReservation.tsx` and below the `calendar` component add a `Button` component and the last part of the return.

8. Finally go back to `ListingCLient.tsx` to fix the error. Go to the part where the 3 react states are defined (isLoading, totalPrice, dateRange) and to the last one add `<Range>` in the following way, don't forget to import `Range` from `react-date-range`. It should like this: `const [dateRange, setDateRange] = useState<Range>(initialDateRange);`.

9. If we try to make a reservation, the UI should work but if check on the "navigation" tab in the dev tools, it should mark an error because the API endopoint router does not exist yet.
