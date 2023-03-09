import "../styles/globals.css";
import { Metadata } from "next";

export const Metadata = {
  title: "News App",
  description: "Find the latest news articles",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
