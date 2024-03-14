import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/index.scss";
import "../globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "./layout/footer";
import Header from "./layout/header";
import MenuLeft from "./layout/menu/menuLeft";
import MenuRight from "./layout/menu/menuRight";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zing MP3",
  description: "Zing MP3 - Nghe nhạc mới, HOT nhất và tải nhạc miễn phí",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <div className="frame-view">
            <MenuLeft />
            <div className="zing-content">
              <Header />
              <div className="main-container">{children}</div>
            </div>
            <MenuRight />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
