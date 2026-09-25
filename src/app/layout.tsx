import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "권태혁 | Backend Developer",
  description:
    "AI 백엔드와 NCP 클라우드 인프라를 설계·구축·운영한 권태혁의 이력서와 프로젝트 포트폴리오입니다.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
