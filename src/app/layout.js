import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Layouts/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yazid Khairul Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex lg:flex-row flex-col overflow-x-hidden relative">
          <Navbar />
          <div
            // style={{ backgroundColor: "#1E0342" }}
            className=" bg-[#1c0a3b]  pt-8 px-4  mx-auto  w-full  min-h-full lg:h-screen overflow-y-scroll scrollbar-none"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
