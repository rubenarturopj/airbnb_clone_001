#### Functionality of Register, MongoDB, Prisma setup

1. Install Prisma in the terminal

```sh
npm i -D prisma
npx prisma init
```

Prisma instructions in the terminal - - - - - - -
_Set the DATABASE_\_ _URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started_
_Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb._
_Run prisma db pull to turn your database schema into a Prisma schema._
_Run prisma generate to generate the Prisma Client. You can then start querying your database._

---

2. Search on internet "mongo db atlas", go to the official website and create a new project, create then a new database, make sure to choose the free option. Then set up the username and password (admin, admin). For the IP, to avoid problems it's better to put the following: "0.0.0.0/0". Then accpet everything. Click on "connect". Choose connect with VSCode: we are not going to connect with VSCODE but we need the type of link this option provides

```sh
mongodb+srv://admin:<password>@clusterairbnb.ax6rhq7.mongodb.net/test
```

3. Go to Public folder, and in there you should see an .env file (public/.env). In there you will see a constant called DATABASE URL with a string associated to it. Replace that string with the one we copied from mongodb atlas. Make sure to leave the quotation marks. Once done that, chance the componen >password< in the url for the actual password. Make sure you have "/test" at the end of the string, or whatever your database is, otherwise prisma won't work.

```sh
mongodb+srv://admin:admin@clusterairbnb.ax6rhq7.mongodb.net/test
```

4. There's a new folder called "PRISMA" that was created when we installed prisma. Inside it has a file named "schema.prisma". In there, change the datasource db provider value to "mongodb".

```sh
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

-   ATTENTION HERE: if "schema.pisma" 's text is all plain white, if you dont' see it in colors, it means you are missing an extension. Install the extension "Prisma" on the VSCode Store.

-   DATABASE: Continue to work on prisma/schema.prisma file to make it ready. Create all the queries for the TABLES in the database and connect among them.

5. Now that the database queries are done. We need to push this to our database. Go to mongodb(cloud), click Browse collections. You wont see anything because we haven't pushed our queries yet. So, now we're going to run a command that will push the queries to the DB.

-   To push the queries to the DB, in the terminal type:

```sh
npx prisma db push
```

-   Terminal must show a successful message
-   Go to Browse Collections in Mongo DB cloud, or click refresh if you were already there, and you should be able to see all the 4 tables created.

6. Implement Auth.js. This technology is used for authentication to our website when logging in. It allows the user to log in using one of their already existing accounts like google, facebook, github, etc. In this case, we are going to use an official adapter for Next.js and Prisma, which is called: "@next-auth/prisma-adapter".

To install @next-auth/prisma-adapter type the following 3 packages in the terminal:

```sh
npm install next-auth @prisma/client @next-auth/prisma-adapter
```

7. Install another package that will help us with personal login, that is "bcrypt". In the temrinal run:

```sh
npm install bcrypt
```

-   and then install its types:

```sh
npm install -D @types/bcrypt
```

8. Create our Prisma DB Util. In the /app/ folder, create another folder called "libs". Inside that folder, create a file called "prismadb.ts" (/app/libs/prismadb.ts). Fill it in. We are creating this PrismaClient global variable because it has an impact in the whole code. It's a better practice to do this. Technically we could import the PrismaClient everywhere in the code, but it would creat a lot of "new Prisma Client" instances and would give us warnings in the terminal. This all because of Next.js hot realoding. So this solution helps prevent that and it's also cleaner and best practice.

9. Create our "next-auth" file. As of March 27th 2023, NextAuth DOES NOT SUPPORT the app/api YET. So we cannot create a "next-auth" file inside the /app/ folder. This is the only instance where we need to use the "Pages" instance. Don't worry, the "Pages" api won't be depricated for a very longtime, because of the migration period Next.13 needs to allow. SOOOOOO, let's create the folder /pages/ in the project folder.

-   In the project folder, create the /pages/ folder. Inside of that create a new foler called /api/. Inside, create a new folder called /auth/. And inside create a new file called "[...nextauth].ts" ---> "projecFolder/pages/api/[...nextauth].ts"

-   Fill in this new file. It,s very complicated this part. We are defining the Autentication part of our login: using google and/or github credentials, and using email and password. We're using the technologies we installed to work with encrypted passwords and more security aspects. This is where we decide if we allow the user to log in or not. VERY IMPORTANT.

13. Set up "NEXTAUTH_SECRET" in .env file. Go to ".env" file and add in it: "NEXTAUTH_SECRET=thisIsOurSecret". The secret is the one we wrote in the "[...nextauth].ts" file. IN THIS CASE ONLY is the same as the variable because we decided it to be like that. In this case, the line of code we have to add to ".env" file is:

```sh
NEXTAUTH_SECRET="NEXTAUTH_SECRET"
```

14. Now we're going to create our Route (backend) that we used in our RegisterModal before, using AXIOS. Go to app folder, then delete the hello folder it has because we're not going to use it. In /app/ create a new folder called "register", in it create a new file called "route.ts"... (/app/api/register/route.ts). Fill it it creating the function to make a http POST request.

-   If everything was well done. Then you can save modifications, refresh your app and then create a new user. It should work, if you inspect or press F12 you can see the process being succesful. Also if you go to mongo db atlas , you will see the first user created in the USER table. We are using the AXIOS code we set in _RegisterModal_ to treat the post request. We set up the post request in _route.ts_. We canalize the request through _schema.prisma_, here also we set up where are we sending the request, to what database, we used the URL from the _.env_ file.

-   (((parenthesis: axios is used to make/treat http requests. Express is used to build up the server. Express servers the website pages /, /logging, /users.... Axios deals with the requests made (get, post, delete...))))
