#### Listing creation: Location selection, Map component, Country autocomplete. Step 0 and 1.

1. In `RentModal.tsx`, create an if clause just before the return. This will be the next modal after clicking NEXT. Then replace the `onSubmit` value of the function in the return, for `onNext`. We are setting up function called `onNext`, `onBack` to control the flow of the modal, like when you click the button next to move to nthe next step or back to go to the previous one.

2. Now we're going to configurating what we're going to return on each step. The enum declared on top is an object of constants. Each constant has the value of the number of steps: 1,2,3,4, etc. which will be used to control all the steps returning sections. (1 means step 1, 2 means step 2, etc.). This is statement we created before will control the first step. If the STEP state matches number 1, it will render this first step in the modal, asking for the location of the house. If step state matches number 2, it will render the next state which will ask for INFO., etc.

3. For step 1. Create a returning section with divs, a heading, and a new component call `<CountrySelect/>`. We will create that component in `app/components/inputs`. Add `use client` at the top. `CountrySelect` will have inside a hook called `useCountries.ts`.

4. We need no create this file in `app/hooks` folder. `useCountries.ts` will be used to set up all the countries. We need to install a package for this function called `world-countries`. Stop the application first.

```sh
npm install world-countries
```

-   import `countries` from this package on top of the file. create a function to format all the data obtained from the package. Then more functions to return a) all countries or b) the ones that match the value searched. Add the expor tat the end.

5. Go back to `CountrySelect`. Install the following package.

```sh
npm install react-select
```

-   Once installed, import the `Select` component from `react-select`. Run the app again (_npm run dev_). Then create a type object for all the types we'll use. Then create an interface for the CountrySelect. Import the `useCountries` component we just created before because we're going to use it before the return section. Keep working on the returning section which will display a dropdown menu to select the country.

6. Go back to `RentModal` and fix the error in `<CountrySelect>` by passing its properties. Add another `watch` cosnt, but this time watch for `location`. ONce done that, we're going to use that value to assign it to `<CountrySelect>`. SUper, that's done. Now if you click on Back the location selected will stay the same on the UI.

7. in `RentModal` we want to add a map below the dropdown menu. SO add the component `<Map/>`. Now go to `app/components` and create the file `Maps.tsx` in order to the map component. Mark it as "use client" on top. To work on the map, we have to install more packages and their types:

```sh
npm install leaflet
npm install -D @types/leaflet
npm install react-leaflet
```

-   Remeber to stop the application before installing and the run it again after installing (_Ctrl+C_, _npm run dev_). Also refresh your website.

-   Just to keep in mind that leaflet is not exactly supported by react, it's an open source we need a little workaround to make it work

8. Fill `Maps.tsx` with its types, with the map package stuff. Work on the return section. Pass the props from the interface to the main section and add the `<MapContainer>` component and its properties. However, we wont't be able to see anything because we need to add some styles in `Globlal.css`.

9. in `Globlal.css` add the following.

```sh
    .leaflet-bottom,
    .leaflet-control,
    .leaflet-pane,
    .leaflet-top {
        z-index: 0 !important;
    }
```

-   RESTART THE APPLICATION AFTER THIS STEP and run it again, refresh your browser.

10. After restarting the app, you should be able to see the grey box where the map will be. The next step is to add the `<TitleLayer>` component (and its properties), which will show the map after saving.

11. Go to `RentModal.tsx` and in the `<Map/>` component add the `center` property.

12. BUG FIX. Because this Map is not fully supported by React. We have to fix its import. Delete the import of Map: `import Map from "../Map"`. And below the consts `category` and `location`, write the following:

```sh
    const Map = useMemo(() => dynamic(() => import("../Map"), {
        ssr: false,
    }), [location]);
```

-   passing `location` in the dependency array will throw a problem in the console, but everything will work. In the UI if you write the name of a country, the map will display it.

13. For the `nav marker`. Go to `Map.tsx` and below `<TitleLayer>` add the component `<Marker/>` in a conditional.
