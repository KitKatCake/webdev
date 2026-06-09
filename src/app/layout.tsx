import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Monsters | 北欧精灵森林 · POP MART Labubu 官方主题",
  description:
    "欢迎来到 The Monsters 精灵森林——由龙家昇（Kasing Lung）创作的北欧精灵世界。探索Labubu、Zimomo等9个精灵角色，了解盲盒系列与森林传说。泡泡玛特POP MART出品。",
  openGraph: {
    title: "The Monsters | 北欧精灵森林",
    description: "Labubu 与精灵们的北欧森林世界——角色图鉴、盲盒系列、森林传说。",
    type: "website",
    images: ["https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          跳转到主要内容
        </a>
        {children}
      </body>
    </html>
  );
}
