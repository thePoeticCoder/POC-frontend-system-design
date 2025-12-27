/** @format */

"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [token, setToken] = useState<string | null>(null);
  const [isValidtoken, setIsValidtoken] = useState<boolean>(false);

  useEffect(() => {
    const urlToken = searchParams.get("token");

    if (urlToken) {
      localStorage.setItem("token", urlToken);
      setToken(urlToken);
    } else {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      if (!storedToken && pathname !== "/login") {
        router.push("/login");
      }
    }
    setIsValidtoken(token === "12345");
  }, [searchParams, pathname, router]);

  return (
    <html lang='en'>
      <body className={`${font.className} antialiased`}>
        {isValidtoken && <ResponsiveNav />}
        {children}
      </body>
    </html>
  );
}
