import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "../lib/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "BademArt",
    description: "Art By Bengu Aslan",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className + " flex min-h-screen flex-col"}>
                <SessionProvider>
                    <Navbar />
                    <main className="m-auto min-w-[300px] max-w-7xl flex-1 p-4">
                        {children}
                    </main>
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}
