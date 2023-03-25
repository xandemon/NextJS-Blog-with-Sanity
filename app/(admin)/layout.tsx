export const metadata = {
  title: "Sandesh Blog Studio",
  description: "Generated using Next.js & Sanity v3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
