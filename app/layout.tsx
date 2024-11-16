import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";
import { Outfit
} from 'next/font/google'
 
const outfit = Outfit
({
  weight: ['100','200','300','400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Markus Talka",
  description: "Welcome to Markus Talka's personal website. I am a software developer and software industry professional, residing in Helsinki, Finland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} flex min-h-screen flex-col items-center gap-8 p-4 pt-12 lg:p-24`}
      >
        <header className="relative w-full flex justify-center">
          <h1 className="text-4xl z-10 font-bold">Markus Talka</h1>
          <div className="absolute z-0 rotate-6 translate-y-2 w-40 h-8 bg-gradient-to-r from-emerald-200 to-cyan-200"></div>
        </header>
        <Nav />
        <main className="max-w-screen-xl">{children}</main>
      </body>
    </html>
  );
}
