import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] }); // import and create a const to pass a font to our website

export const metadata = {
    title: "Airbnb Clone",
    description: "Airbnb Clone Project",
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
                    <LoginModal />
                    <RegisterModal />
                    <Navbar currentUser={currentUser} />
                </ClientOnly>
                {children}
            </body>
        </html>
    );
}
