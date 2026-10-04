import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${portfolio.name} | Portfolio`,
  description:
    "The portfolio of Ashifa sharin Y, a computer science engineering student focused on cybersecurity and AI/ML.",
  applicationName: `${portfolio.name} Portfolio`,
  openGraph: {
    title: `${portfolio.name} | Portfolio`,
    description:
      "Computer science, cybersecurity, and AI/ML — the work and ideas of Ashifa sharin Y.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
