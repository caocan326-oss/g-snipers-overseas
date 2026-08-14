import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SemChrome } from "@/components/sem/chrome";

import "./sem.css";

export const metadata: Metadata = {
  title: "G-Snipers 海外版 · SEM",
  description: "Google Ads 本地原型。示例数据，未配置 / 未测，不连接真实广告账户。",
};

export default function SemLayout({ children }: { children: ReactNode }) {
  return <SemChrome>{children}</SemChrome>;
}
