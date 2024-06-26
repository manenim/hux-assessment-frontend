import NavbarComponent from "@/components/navbar/navbar";
import Providers from "@/app/_providers";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Contacts App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavbarComponent />
          <div className={poppins.className}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
