import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wade",
  description: "Wade Clothing Store",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* Sidebar */}

      <Nav />
      {/* Page content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
