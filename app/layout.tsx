import { Nunito } from "next/font/google";
import "./globals.css";

import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import RentModal from "./components/modals/RentModal";

import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import SearchModal from "./components/modals/SearchModal";

const font = Nunito({ subsets: ["latin"] }); // import and create a const to pass a font to our website

export const metadata = {
    title: "Airbnb Clone Learning Project",
    description: "Airbnb Clone Learning Project",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();
    return (
        <html lang="en">
            {/* this classname serves to pass the font */}
            <body className={font.className}>
                <ClientOnly>
                    <ToasterProvider />
                    <SearchModal />
                    <RentModal />
                    <LoginModal />
                    <RegisterModal />
                    <Navbar currentUser={currentUser} />
                </ClientOnly>
                <div className="pb-20 pt-28">{children}</div>
            </body>
        </html>
    );
}
