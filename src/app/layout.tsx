import "./globals.css";
import BottomNavBar from "@/components/bottomNavBar";
import { Inter } from "next/font/google";
import Toaster from "@/components/toaster";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "묵상노트",
  description: "묵상을 기록하고 되새김질하세요",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" data-theme={"pastel"}>
      <body className={inter.className}>
        <Toaster />
        <main className="flex justify-center items-center ">
          <div className="container max-w-2xl min-h-screen p-5">
            {/* @ts-expect-error Async Server Component */}
            <Navbar />
            {children}
          </div>
        </main>
        <footer className="max-w-2xl">
          <BottomNavBar />
        </footer>
      </body>
    </html>
  );
}
