import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Layouts/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YKH Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col overflow-x-hidden">
          <div className=" ">
            <Navbar />
          </div>
          <div
            // style={{ backgroundColor: "#1E0342" }}
            className=" bg-slate-800  py-8 px-4  mx-auto 2xl:container xl:container lg:container w-full  min-h-full h-screen overflow-y-scroll scrollbar-none"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
