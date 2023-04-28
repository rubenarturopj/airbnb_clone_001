#### Google and github authentication login

GITHUB

1. Go to your Github profile > settings > left panel: developer settings > left panel: Oauth Apps > Click on New OAuth App.

2. Name your New OAuth App. Por example: Airbnb-clone-R

3. In Homepage URL, type: http://localhost:3000/

4. In Authorization callback URL, use the same as in Homepage URL: http://localhost:3000/

5. CLick on Register application.

6. In the following page, you should be able to see Client ID. Grab it. Also, click in Generate a new client secret, to have a client secret.

7. In our source code and then in `pages/api/auth/[...nextauth].ts`, we can see that the Github and Google providers are using an ID and a SECRET. This is what we're going to define in the `.env` file. Go to `.env` and below DATABASE_URL and NEXTAUTH_SECRET, define

```sh
GITHUB_ID="" <---- Fill with CLIENT ID from github
GITHUB_SECRET="" <---- Fill with CLIENT SECRET
```

8. Now go to `app/components/modals/RegisterModal.tsx`. In the `footerContent`, in the `<Button>` for Gihub, instead of having an empty function in the `onClick`, type `signIn("github")` in the return section of the function and import it on top of the document from `next-auth/react`.

```sh
import { signIn } from "next-auth/react";
onClick={() => {signIn("github")}}
```

9. Now if we try to loggin using github credentials, it should work. If we check the database, we should see the register there as well.

10. We are going to pass the image grabbed from the github loggin and pass it in my website. Go to `app/components/navbar/UserMenu.tsx`. Because we had already passed the currentUser, all we have to do is assign it to the `<Avatar/>` component as `<Avatar src={currentUser?.image}/>`.

11. Next step is to add the `src={}` to the avatar component in `app/components/Avatar.jsx`. We add an interface for the src props. Then we pass it in the function below in the form of a conditional rendering. We save and the app will break, it will show an error message saying: `the hostname avatars.githubusercontent.com is not configured under images in next.config.js`. Grab this link given to you.

12. Go to `next.config.js` and add `images: {domains: ["avatars.githubusercontent.com"]},` in the following section:

```sh
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["avatars.githubusercontent.com"],
    },
};
```

13. Stop the app in the terminal. THen restart it `npm run dev`. YAAAAAY. Now we can see our profile picture.

14. The final step is to go to `app/components/modals/LoginModal.tsx` and, in the `footer content constant`, add step numbr 8. This is to, after having signed up with github, we can simpli login anytime using github credentials.

```sh
import { signIn } from "next-auth/react";
onClick={() => {signIn("github")}}
```

GOOGLE

1. Search for `Google developer console` on the explorer and click on the link to `console.cloud.google.com`. Create a new project and call it `Airbnb-clone-R`. Enter the project. In the search bar of the google cloud console, search for `API`. Click on "enable API services" (APIs y servicios habilitados).

2. on the left panel, select OAuth consent screen / Pantalla de consentimiento de OAuth. When the promp appears asking us to chose between Internal/External, choose External. This will make it available for any test user that has a google account.

3. App name: Airbnb-clone-R. Email: your google email. You can leave the rest of the fields in blank, except for Developer contact information, there add your email again. Click Save and continue. ON the next tab "scopes/ permisos/ you can leave everything as it is and click on continue. On the 3rd tab "test users/usuarios de prueba" you can leave that empty as well and click on save and continue one more time. And that's it. The last tab is just a summary.

4. On the left panel, click on Credentials. On top of the main section, there's a button called "Create credentials / Crear credenciales". CLick on it. From the options promted, select "OAuth client ID / ID de cliente de OAuth" and click ont. FOr the "application type / tipo de aplicaciôn", select "WEb application / aplicacion web". You can leave the name as suggested (Web client 1 / Cliente web 1). Now go below to "Authorized redirect URIs / URI de redireccionamiento autorizados" and click on "Add URI / Agregar uri". In this input, type "http://localhost:3000/api/auth/callback/google". Then click on "create/crear".

5. Now we have our ID and our secret. Grab them.

6. In our app code go to `pages/api/auth/[...nextauth].ts` to find out what we need. We need GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET. So, let's go to `.env` to add that.

```sh
GOOGLE_CLIENT_ID="" <---- Fill with CLIENT ID from google
GOOGLE_CLIENT_SECRET="" <---- Fill with CLIENT SECRET from google
```

7. Go to `app/components/models/RegisterModal.tsx`, look for the `footerContent` and in its corresponding button, add `signIn("google")` to the `onClick` function. Don't forget to import it on top of the file.

```sh
import { signIn } from "next-auth/react";
onClick={() => {signIn("google")}}
```

8. Before continuing and testing: 1) Make sure to logout from our website. 2) Go to your database on MongoDB Atlas (cloud) and delete all your accounts (or all the accounts that have the same email). It's better to delete them all. You dont' have to do this if you have different emails.

9. Browse our website and sign up using google. It works but at some point it breaks and gives an error saying `hostname "lh3.googleusercontent.com"  is not configured under images in your next.config.js`. Grab this link given to you.

10. Go to `next.config.js` and add that link below the link from github. This is what the function must look like afterwards:

```sh
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
          "avatars.githubusercontent.com",
          "lh3.googleusercontent.com"
        ],
    },
};
```

11. Stop the application from the terminal (ctrl+C) and then restart it `npm run dev`. Finally refresh our website and you should be able to see your picture on the top right.

12. Let's add `sign in` to `login modal` as well. Add the `signIn("google")` function again and import it on top if you haven't. So we can log in using google credentials after having signed up with google first.

```sh
import { signIn } from "next-auth/react";
onClick={() => {signIn("google")}}
```

-   DID THE FONT IN PROJECT CHANGED AUTOMATICALLY????

If you have this issue. Then stop the project. Simply delete `.next` folder. And restart the project. This will create a new `.next` folder with Next.JS stuff in it. This is just cache from Next.JS. If you ever have another issue just do this and it should fix it.
