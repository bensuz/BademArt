import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "../../lib/SessionProvider";
import MainNavbar from "@/components/MainNavbar/Navbar";

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
            <body
                className={
                    inter.className + " flex min-h-screen flex-col bg-white"
                }
            >
                <SessionProvider>
                    <MainNavbar />
                    <main className="min-w-[300px] max-w-screen flex-1 bg-white p-4">
                        {children}
                    </main>
                </SessionProvider>
            </body>
        </html>
    );
}
