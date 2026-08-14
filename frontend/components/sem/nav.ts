export type SemHref =
  | "/sem"
  | "/sem/alerts"
  | "/sem/keywords"
  | "/sem/creatives"
  | "/sem/budget"
  | "/sem/audience"
  | "/sem/assets"
  | "/sem/campaigns"
  | "/sem/landing"
  | "/sem/conversion"
  | "/sem/strategy"
  | "/sem/reports"
  | "/sem/auth";

export type SemNavItem = {
  href: SemHref;
  label: string;
  icon: "dashboard" | "alerts" | "keywords" | "creatives" | "budget" | "audience" | "assets" | "campaigns" | "landing" | "conversion" | "strategy" | "reports" | "auth";
  badge?: number;
};

export type SemNavGroup = {
  label: string;
  items: SemNavItem[];
};

export const SEM_NAV: SemNavGroup[] = [
  {
    label: "每日盯盘",
    items: [
      { href: "/sem", label: "数据看板", icon: "dashboard" },
      { href: "/sem/alerts", label: "监控预警", icon: "alerts", badge: 9 },
    ],
  },
  {
    label: "优化执行",
    items: [
      { href: "/sem/keywords", label: "关键词优化", icon: "keywords", badge: 12 },
      { href: "/sem/creatives", label: "创意优化", icon: "creatives", badge: 5 },
      { href: "/sem/budget", label: "预算与出价", icon: "budget", badge: 3 },
      { href: "/sem/audience", label: "受众与定向", icon: "audience" },
    ],
  },
  {
    label: "资产管理",
    items: [
      { href: "/sem/assets", label: "物料资产", icon: "assets" },
      { href: "/sem/campaigns", label: "计划与单元", icon: "campaigns" },
      { href: "/sem/landing", label: "落地页", icon: "landing" },
      { href: "/sem/conversion", label: "转化追踪", icon: "conversion" },
    ],
  },
  {
    label: "智能与报告",
    items: [
      { href: "/sem/strategy", label: "智能策略", icon: "strategy" },
      { href: "/sem/reports", label: "报告中心", icon: "reports" },
    ],
  },
  {
    label: "账户",
    items: [{ href: "/sem/auth", label: "账户授权", icon: "auth" }],
  },
];

export type SemPageMeta = {
  crumb: string;
  action?: { label: string; href?: string };
};

export const SEM_PAGE_META: Record<string, SemPageMeta> = {
  "/sem": { crumb: "每日盯盘 / 数据看板", action: { label: "生成完整报告", href: "/sem/reports" } },
  "/sem/alerts": { crumb: "每日盯盘 / 监控预警", action: { label: "仅看 P0", href: "/sem/alerts?level=P0" } },
  "/sem/keywords": { crumb: "优化执行 / 关键词优化", action: { label: "查看待确认提案", href: "/sem/budget" } },
  "/sem/creatives": { crumb: "优化执行 / 创意优化", action: { label: "查看待确认提案", href: "/sem/budget" } },
  "/sem/budget": { crumb: "优化执行 / 预算与出价", action: { label: "查看待确认提案", href: "/sem/budget#proposals" } },
  "/sem/audience": { crumb: "优化执行 / 受众与定向" },
  "/sem/assets": { crumb: "资产管理 / 物料资产" },
  "/sem/campaigns": { crumb: "资产管理 / 计划与单元" },
  "/sem/landing": { crumb: "资产管理 / 落地页" },
  "/sem/conversion": { crumb: "资产管理 / 转化追踪" },
  "/sem/strategy": { crumb: "智能与报告 / 智能策略" },
  "/sem/reports": { crumb: "智能与报告 / 报告中心", action: { label: "生成完整报告", href: "/sem/reports#full" } },
  "/sem/auth": { crumb: "账户 / 账户授权", action: { label: "生成完整报告", href: "/sem/reports" } },
};

export const DATE_PRESETS = [
  { id: "today", label: "今天", start: "2026-08-14", end: "2026-08-14" },
  { id: "yesterday", label: "昨天", start: "2026-08-13", end: "2026-08-13" },
  { id: "7d", label: "近7天", start: "2026-08-08", end: "2026-08-14" },
  { id: "30d", label: "近30天", start: "2026-07-16", end: "2026-08-14" },
] as const;
