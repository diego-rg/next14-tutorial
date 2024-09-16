import "./globals.css";

export const metadata = {
  title: "Next 14 course",
  description: "Youtube course about nextjs 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
