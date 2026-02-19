import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PostNet Tampa | Design, Print & Shipping | 6421 N. Florida Ave",
  description:
    "PostNet Tampa on 6421 N. Florida Ave offers design, print, and shipping solutions. Locally owned and operated. Call (813) 565-0010.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
