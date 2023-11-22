import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { cn } from "~/lib/style/cn";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niall Barber | Frontend Engineer",
  description:
    "Hey! I'm a Frontend Engineer based in the U.K. 🇬🇧 specialising in React Native, Design Systems and much more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "antialiased")}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
