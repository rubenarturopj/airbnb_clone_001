#### create Navbar UI

1. In app folder, create a new folder called components, and inside create another folder called navbar. In there, create a new file called Navbar.tsx (app/components/navbar/Navbar.tsx). In this file create the main function to export. Now that this file exist, add it in the body of Layout.tsx and import it on top.

-   At some point you will install react icons through the terminal: _npm install react-icons_

```sh
npm install react-icons
```

2. Keep working on the navbar: add style, a container element, logo, search, userMenu, MenuItem etc. Fill in those components of the navbar. Add the corresponding images.

-   It,s in this MenuItems onClick functions where we are going to create the routers (for instance: page/user, page/user/43, page/products, page/cart, page/aboutus, page/joinus )

-   For each router we need a folder with the same name of the router in the `app` folder.

-   Here we are creating the router path for the code to know where to send stuff. But we also need to create a folder containing the same name of the router in the /app/ folder. Example: if we have a router that says "trips", then we will have to create a folder in /app/ with the same name: /app/trips; if we had a router called "favorites" then we would need to create another folder called like that in the /app/ folder: app/favorites.

-   And this new folder in app folder, which will become the router, will have inside a main file always called `page.tsx`.

3. Fix the bug we've gotten when we click on things. It's a hydration error. It could be because at this time we are using the experimental app folder (app folder is in development, in experimental phase). If you wanna try to reproduce the error, refresh the page as many times and as it's loading, click anywhere on the screen/UI.

-   Fix: go in to app/components folder and create a file called "ClientOnly.tsx". This is going to check wether we're in server side rendering or not. Fill that file and create the ClientOnly component. Then go to layout.tsx and wrap up Navbar with the CLientOnly component.
