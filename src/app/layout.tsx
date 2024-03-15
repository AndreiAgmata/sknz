import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/ClashDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/ClashDisplay-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/ClashDisplay-Extralight.otf",
      weight: "200",
    },
  ],
});

export const metadata: Metadata = {
  title: "SKNZ - Swipe In Style",
  description:
    "Transforming Your Cards, Elevating Your Style: SKNZ - Where Every Swipe Reflects Your Personality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clashDisplay.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
