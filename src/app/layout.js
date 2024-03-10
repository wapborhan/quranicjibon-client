// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quranic Jibon",
  description: "জীবন গড়ি কুরআনের আলোকে।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={inter.className}
        className="bg-[#ebeef2] dark:bg-hadith-dark-card relative"
      >
        {children}
      </body>
    </html>
  );
}
