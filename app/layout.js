import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Ethos Consulting Group LLC | IT Consulting & Technology Delivery",
    template: "%s | Ethos Consulting Group LLC",
  },
  description:
    "Small consultancy for digital transformation, data and AI, software engineering, Salesforce, ERP, and program leadership—senior-led delivery with clear communication.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ethos Consulting Group LLC",
    description:
      "Practical technology consulting: strategy, data, AI, software, Salesforce, ERP, and program delivery for teams that want senior judgment without enterprise overhead.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
