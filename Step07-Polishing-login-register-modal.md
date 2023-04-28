#### Polishing login/register modals.

1. Go to `LoginModal.tsx`, in the footer const section. Change the "Already have an account?" for "First time using Airbnb?", change also the "log in" for "Create an account".

2. Create a toggle function above the body content, to close the login modal and open the register modal. Once it's created, in the return section of the footer, change the `onCLick` function for this toggle function we just created.

3. We'll du exactly the same with the register modal. Copy this `toggle` function and paste it in `RegisterModal.tsx`. Invert the variables that will close and open. Then add the toggle function to the `onClick` parameter. Don't forget to add the "const loginModal" on top of the main function.
