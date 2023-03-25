import Header from "@/components/Header";
import "../globals.css";

export const metadata = {
  title: "Sandesh Blog (ongoing)",
  description: "Generated using Next.js & Sanity v3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Banner */}
        {children}
      </body>
    </html>
  );
}
