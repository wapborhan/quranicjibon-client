import "./globals.css";

export const metadata = {
  title: "Quranic Jibon",
  description: "জীবন গড়ি কুরআনের আলোকে।",
  keywords: "Quran, Islam, life",
  author: "Borhan Uddin",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="light"
      //  style={{ colorScheme: "dark" }}
    >
      {/* <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
      </head> */}
      <body className="bg-[#ebeef2] dark:bg-hadith-dark-card relative">
        {children}
      </body>
    </html>
  );
}
