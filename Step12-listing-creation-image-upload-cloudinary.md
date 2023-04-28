#### Listing creation: Image upload, Cloudinary CDN. STEP 3

1. Go to `RentModat.tsx` and create and IF statement to render another `bodyContent` if `STEP` matches `3`, which is `IMAGES`. Add the `<Heading/>` component and we will use a new component called `<ImageUpload/>` component from `ImageUpload.tsx` that we'll create in `app/component/input` folder. Don't forget to mark this new file as "use client".

2. Create an account in `Cloudinary`. Go to `Google`, search for it. Create your free account. Enter and on the dashboard (left panel) you can see your Cloud name, your API key, API secret and API Environment.

3. Install the `Next Cloudinary` package.

```sh
npm install next-cloudinary
```

-   We'll add this line of code as well to our project, replacing the last part with your cloud name, in our `.env` file:

```sh
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

4. Let's code the `ImageUpload.tsx` file and style it. Everyting's set and if you try up upload a picture. It should work until the part where you actually press the final submit /upload picture button. There it won't work because it's not ready yet. We need to add this const to our code `const uploadPreset = "<your preset>";`. You can get this preset you have to get it from Cloudinary website. GO to the website, settings on left panel, click on `Upload`. On the right panel, you'll find a section called `Upload presets`, click on `Add upload preset`.

5. For the "Upload preset". The `signing mode` must be `unsigned`. Copy the `upload preset name` on top, and then click on `save`. Once that done, go back to your code and on `ImageUpload.tsx` and create a constant to carry the string you copied. Then find the `uploadPreset` and paste the const value you just created.

6. If you upload a picture, it will throw and error because we haven't passed the `onChange` function. BUT if you go check on cloudinary, the image you uploaded will be there.

7. Go back to `RentModal.tsx` and to the `<ImageUpload/>` component add the value and onchange proterties. DOnt, forget to add the constant that will watch for `imageSrc`.

8. If you try again to upload a picture. It will trigger another error. Copy the hostname the error gives you (`res.cloudinary.com`), then go to `next.config.js` and paste it in the `images.domains` array. After this step SHUT DOWN your application and restart it. It all should work now. Good job.
