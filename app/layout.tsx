import "./globals.css";

export const metadata = {
  title: "Terllo 2.0 Clone",
  description: "Practice project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">{children}</body>
    </html>
  );
}
