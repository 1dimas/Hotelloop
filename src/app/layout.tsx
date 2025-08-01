import type { Metadata } from "next";
import { Montserrat} from 'next/font/google';
import "./globals.css";
import Navbar from "./components/nav/navbar";
import Footer from "./components/nav/footer";

const montsserat = Montserrat({
  variable: "--font-montsserat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Online Booking Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montsserat.variable}  antialiased`} >
         <Navbar/>
        <main className="bg-gray-50 min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html >
  );
}
