import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zing MP3",
  description: "Zing MP3 - dashBoad",
  icons: {
    icon: [
      {
        media: "",
        url: "/images/icon_zing_mp3.png",
        href: "/images/icon_zing_mp3.png",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div>header quản lý</div>
          {children}
          <div>footer quản lý</div>
        </div>
      </body>
    </html>
  );
}
