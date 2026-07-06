import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "권태혁 | Backend Developer",
  description:
    "Java/Spring 기반 실무형 백엔드 개발자 권태혁의 이력서입니다. DB 이관, 배치 자동화, 모니터링, NCP 인프라, CI/CD, 실시간 AI 비밀 대화 백엔드 경험을 담았습니다.",
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
