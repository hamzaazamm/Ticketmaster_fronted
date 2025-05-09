import { Lato } from "next/font/google"; // Import Lato from next/font/google
import "./globals.css"; // Import global CSS file

const lato = Lato({
  weight: ["300", "400", "700", "900"], // Include the font weights you want
  subsets: ["latin"], // Choose the subset
  variable: "--font-lato", // Create a CSS variable for Tailwind/global use
  display: "swap", // Avoid FOIT (Flash of Invisible Text)
});

export const metadata = {
  title: "Your Project Title",
  description: "Your Project Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
