import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ToasterProvider from "@/providers/ToasterProvider";
import getCurrentUser from "@/actions/getCurrentUser";

import RegisterModal from "@/components/Modals/RegisterModal";
import LoginModal from "@/components/Modals/LoginModal";
import RentModal from "@/components/Modals/RentModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
