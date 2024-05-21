import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import { Footer, AdminHeader, AdminNav } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Auto Ben's - Dashboard",
  description: "Monitorez vos véhicules en une seule vue !",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <div className="flex flex-row">
            <AdminNav />
          <div className="flex flex-col w-full">
            <AdminHeader />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
