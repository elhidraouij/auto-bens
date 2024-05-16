import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Footer, Header } from "@/components";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auto Ben's - Accueil",
  description: "La voiture dont vous réviez en un clic !",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}