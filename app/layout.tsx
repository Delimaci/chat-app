import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabi Chat App",
  description: "Gabi App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_Grotesk.className}>
        
      <ThemeProvider 
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
>

        {children}

        <Toaster position="top-center"/>

        </ThemeProvider>


        </body>
    </html>
  );
}
