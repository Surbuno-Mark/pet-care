import "../styles.css";

export const metadata = {
  title: "暖爪宠物护理 | 珠海平沙镇时代港宠物洗护",
  description:
    "暖爪宠物护理，位于珠海市平沙镇时代港，提供宠物洗护、美容修剪、健康护理和预约服务。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
