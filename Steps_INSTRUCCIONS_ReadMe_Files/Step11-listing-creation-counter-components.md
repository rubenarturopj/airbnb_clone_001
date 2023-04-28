#### Listing creation: Counter components (how many bathrooms, guests, rooms). Step 2

1. Go to `RentModal.tsx` and find the IF statement conditional that belongs to the step 2 = INFO. Create the `bodyContent` value. Add 3 `<counter/>` component, and horizonal lines among them to separate them `<hr/>`. We have yet to create this component.

2. Create the component in a file named `Counter.tsx` in `app/components/input`. Make sure to mark it as "use client". Create an interface for the props. Create the functions `onAdd` and `onReduce` in the main function. Work on the return section and its styling.

3. In `RentModal.tsx`, add the `value` property to each `Counter` component. Create its const on top that you will pass as this value. Later, add the `onChange` function property to each `Counter` component and add an arrow function like this: `onChange={(value) => setCustomValue("name-of-the-value", value)}`. Now that this is done, we can change the value of the guests, the rooms and the bathrooms in the UI.
