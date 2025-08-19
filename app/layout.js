import { Inter } from "next/font/google";
import "./globals.css";
import { DashboardLayout } from "../components/ui/dashboard-layout";
import { motionValue } from "motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard App",
  description: "Dashboard with persistent sidebar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
