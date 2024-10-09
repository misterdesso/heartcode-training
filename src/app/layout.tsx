import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation-menu/navigation-menu";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Jin Kai's Website",
  description: "Drugs are bad, okay?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavBar/> 
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}