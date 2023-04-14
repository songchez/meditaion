import "./globals.css";
import BottomNavBar from "@/components/BottomNavBar";
import { Inter } from "next/font/google";
import AuthStatus from "@/components/auth/auth-status";
import Toaster from "@/components/toaster";

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
  const AuthStatusDiv = await AuthStatus();

  return (
    <html lang="en" data-theme="pastel">
      <body className={inter.className}>
        <Toaster />
        {AuthStatusDiv}
        <main className="flex justify-center items-center pt-10">
          <div className="container max-w-4xl p-5">{children}</div>
        </main>
        <footer>
          <BottomNavBar></BottomNavBar>
        </footer>
      </body>
    </html>
  );
}
