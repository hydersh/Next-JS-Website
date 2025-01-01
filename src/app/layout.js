import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Sheharyar's Website ",
  description: "Created with Next.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
        {children}
      </body>
    </html>
  );
}

export const button = {
  display: "block",
  align: "center",
  justify: "center",

}
