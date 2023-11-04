import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import Header from "~/components/header";

import "./globals.css";

import Footer from "~/components/footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niall Barber | Frontend Engineer",
  description: "This is some cooooooool ass description about little old me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

type Fruit = {
  favourite: "banana";
  meh: "apple";
  yuck: "orange";
};

type Apple = Pick<Fruit, "meh">;

type MyPick<T, K extends keyof T> = { [Key in K]: T[Key] };
type Thing<T, K extends keyof T> = { K: T };

type Thingy = {
  name: string;
};

interface Thingy2 extends Thingy {
  age: number;
}

const person: Thingy2 = {
  name: "niall",
  age: 33,
};

type P = keyof typeof person;
