import "./globals.css";
import BottomNavBar from "@/components/BottomNavBar";
import { Inter } from "next/font/google";
import Toaster from "@/components/toaster";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bible30000",
  description: "Bible 30000 Project",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const DivNavbar = await Navbar();
  return (
    <html lang="en" data-theme="pastel">
      <body className={inter.className}>
        <Toaster />
        <main className="flex justify-center items-center ">
          <div className="container max-w-2xl p-5">
            {DivNavbar}
            {children}
          </div>
        </main>
        <footer className="max-w-2xl">
          <BottomNavBar></BottomNavBar>
        </footer>
      </body>
    </html>
  );
}
