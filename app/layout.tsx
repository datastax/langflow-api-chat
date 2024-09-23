import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: `Langflow Chat`,
  description: `Welcome to your Langflow Chat`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
