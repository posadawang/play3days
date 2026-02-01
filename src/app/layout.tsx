import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google"; // Import cute rounded font
import "./globals.css";

const rounded = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-rounded",
});

export const metadata: Metadata = {
  title: "Travel Itinerary",
  description: "Scheduled travel plan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${rounded.variable} font-rounded bg-cute-cream text-cute-text antialiased min-h-screen selection:bg-cute-pink selection:text-white`}>
        <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl overflow-hidden relative">
          {/* Mobile container constraint to look like a phone app even on desktop */}
          {children}
        </div>
      </body>
    </html>
  );
}
