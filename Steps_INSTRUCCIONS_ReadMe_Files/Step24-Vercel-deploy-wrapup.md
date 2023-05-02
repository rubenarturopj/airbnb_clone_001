## Vercel deploy and wrap-up

### wrap up

1. To deploy this project, first you have to push it to your github account.

2. Also, to make sure there are no errors in our page, we can run the following command:

    ```sh
    npm run lint
    ```

3. Warnings are ok, but not errors.

### Deployment

About Vercel 2023:
"Vercel has three plans options: Hobby, Pro, and Enterprise. Every personal account on Vercel is a Hobby account. Hobby accounts are free of charge forever and are for personal, non-commercial use. Hobby accounts are subject to our fair usage policy and platform limits."

You can ask for PRO plan trial of 14 days or until usage limits. From there you can pay the PRO plan or return to a Hobby plan

-   Create an account on Vercel, choose HOBBY PLAN, sign up with Github.

1. Go to `My Vercel` > `my account`. Make sure you are on Dashboard.

2. Click on `Add new+`. In `Import Git Repository`, go to `Select a Git Namespace` and add your github account. It will ask if install on all repositories or selected ones only. I clicked ALL.

3. Now I have a list of my repositories. select this one project, and click `import`. It will brin up another page to set things up. Look in the options the one tab that says `Environment Variables`. Don't do anything else.

4. GO TO YOUR CODE. Especifically to your `.env` file. COpy everything from that file and paste it in the Vercel page, Environment Variables tab, EXACTLY in the input field that says `Name`. Paste it there and it will automatially populate all the other input fields.

5. After that you can hit on the `deploy` button.

-   ⚠️⚠️⚠️⚠️ The author is changing the `Project Name` on Vercel. WHY? Because if we put the name of a Big Company, we can be flagged as pishing (hacerse pasar por otra persona moral para estafar gente)

-   I will call this project `fullstack-apartment-rental-website-project`. **Y la 🧀**.

-   ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️ I had issue when deploying to Vercel due to something related to PRISMA. So, the website solution is telling me to add one line of code to my `package.json` file, in the `script` part. the line of code is:

    ```sh
    {
    ...
    "scripts" {
        "postinstall": "prisma generate"
    }
    ...
    }
    ```

### ERROR ON NEXT.JS 13

-   In the forums, people were having my same problem ` Dynamic server usage: searchParams.userId`. Antonio himself recommended [this website where they offer solutions](https://stackoverflow.com/questions/75051613/digest-dynamic-server-usage-nextjs-13)

-   Heres what we have to do: ADD `export const dynamic = 'force-dynamic'` to `page.tsx` and it should work.

### Congratulations! You have succesfully deployed your project 🥳🥳🥳

-   After deploying, you will have to change your Github OAUTH URLs. You cannot longer use LOCALHOST, but whatevet is Vercel gave you.

GITHUB -------------

1. Go to github > your profile > settings > left panel: Developper settings > left panel: OAuth Apps > Right panel: Select the OAuth App.

2. Change `Homepage URL` to what vercel gave you. FOR INSTANCE: `https://video-rent-example.vercel.app/`.

3. Change `Authorization callback URL` to the same URL Vercel gave you.

4. Click on `Update application` button.

GOOGLE ----------------------

1. Go to google cloud console > top panel: select project > left panel : APIs and services > credentials > right panel: click on the desired item (Web Client or whatever you called it).

2. Change the `Authorized redirect URIs / URI de redireccionamiento autorizados` BUT ONLY THE FIRST PART OF IT!!! leave the rest as it is : `<thisIsWhatYouHaveToChangeIncludingHTTP>/api/auth/callback/google`

3. click on `save` button.
