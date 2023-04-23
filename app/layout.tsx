import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] }); // import and create a const to pass a font to our website

export const metadata = {
    title: "Airbnb Clone",
    description: "Airbnb Clone Project",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* this classname serves to pass the font */}
            <body className={font.className}>
                <ClientOnly>
                    <ToasterProvider />
                    <RegisterModal />
                    <Navbar />
                </ClientOnly>
                {children}
            </body>
        </html>
    );
}
