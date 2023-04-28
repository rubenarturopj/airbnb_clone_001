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
