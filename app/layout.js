import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AppcontextProvider } from "./context/Appcontext";
import SessionWrapper from "@/components/Providers/SessionWrapper";
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "ResQ-connect",
  description: "Roadside Assistance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <SessionWrapper>
          <AppcontextProvider> {children}</AppcontextProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
