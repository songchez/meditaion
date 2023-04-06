import "./globals.css";
import BottomNavBar from "@/components/BottomNavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bible30000",
  description: "Bible 30000 Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-center items-center">
          <div className="container max-w-4xl">{children}</div>
        </main>
        <footer>
          <BottomNavBar></BottomNavBar>
        </footer>
      </body>
    </html>
  );
}
