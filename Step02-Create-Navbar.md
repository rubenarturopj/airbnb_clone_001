#### create Navbar UI

1. In app folder, create a new folder called components, and inside create another folder called navbar. In there, create a new file called Navbar.tsx (app/components/navbar/Navbar.tsx). In this file create the main function to export. Now that this file exist, add it in the body of Layout.tsx and import it on top.

-   At some point you will install react icons through the terminal: _npm install react-icons_

```sh
npm install react-icons
```

2. Keep working on the navbar: add style, a container element, logo, search, userMenu, MenuItem etc. Fill in those components of the navbar. Add the corresponding images.

3. Fix the bug we've gotten when we click on things. It's a hydration error. It could be because at this time we are using the experimental app folder (app folder is in development, in experimental phase). If you wanna try to reproduce the error, refresh the page as many times and as it's loading, click anywhere on the screen/UI.

-   Fix: go in to app/components folder and create a file called "ClientOnly.tsx". This is going to check wether we're in server side rendering or not. Fill that file and create the ClientOnly component. Then go to layout.tsx and wrap up Navbar with the CLientOnly component.
