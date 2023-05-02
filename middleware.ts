// this file will protect our routes
export { default } from "next-auth/middleware";

// these are the protected routes
export const config = { 
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites"
  ]
}; // prettier-ignore
