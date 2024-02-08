import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import SidePanel from "@/components/side-panel";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "hGitHelper | %s", absolute: "hGitHelper" },
  description: "HoYa's Git Helper Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SidePanel>
            <Navigation />
          </SidePanel>
          {children}
        </div>
      </body>
    </html>
  );
}
