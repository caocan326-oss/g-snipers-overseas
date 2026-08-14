"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  BarChart3,
  Bell,
  Crosshair,
  FileText,
  FolderTree,
  Globe,
  KeyRound,
  LayoutDashboard,
  Lightbulb,
  MousePointerClick,
  Package,
  Search,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

import { DATE_PRESETS, SEM_NAV, SEM_PAGE_META, type SemNavItem } from "./nav";

const ICONS: Record<SemNavItem["icon"], ReactNode> = {
  dashboard: <LayoutDashboard size={15} strokeWidth={1.6} />,
  alerts: <Bell size={15} strokeWidth={1.6} />,
  keywords: <Search size={15} strokeWidth={1.6} />,
  creatives: <Sparkles size={15} strokeWidth={1.6} />,
  budget: <Wallet size={15} strokeWidth={1.6} />,
  audience: <Users size={15} strokeWidth={1.6} />,
  assets: <Package size={15} strokeWidth={1.6} />,
  campaigns: <FolderTree size={15} strokeWidth={1.6} />,
  landing: <Globe size={15} strokeWidth={1.6} />,
  conversion: <MousePointerClick size={15} strokeWidth={1.6} />,
  strategy: <Lightbulb size={15} strokeWidth={1.6} />,
  reports: <BarChart3 size={15} strokeWidth={1.6} />,
  auth: <KeyRound size={15} strokeWidth={1.6} />,
};

function isActive(pathname: string, href: string) {
  if (href === "/sem") return pathname === "/sem";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SemChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [preset, setPreset] = useState<(typeof DATE_PRESETS)[number]["id"]>("7d");
  const range = DATE_PRESETS.find((p) => p.id === preset) ?? DATE_PRESETS[2];
  const meta = SEM_PAGE_META[pathname] ?? { crumb: "SEM" };

  const action = useMemo(() => {
    if (pathname === "/sem/alerts") {
      return { label: "仅看 P0", href: "/sem/alerts?level=P0" };
    }
    return meta.action;
  }, [meta.action, pathname]);

  return (
    <div className="sem-root">
      <aside className="sem-sidebar">
        <div className="sem-brand">
          <Link href="/sem" className="sem-brand-mark">
            <span className="sem-logo">
              <Crosshair size={16} strokeWidth={2} />
            </span>
            <span>
              <div className="sem-brand-title">G-Snipers 海外版</div>
              <div className="sem-brand-sub">SEM · Google Ads</div>
            </span>
          </Link>
        </div>
        <nav className="sem-nav">
          {SEM_NAV.map((group) => (
            <div key={group.label} className="sem-nav-group">
              <div className="sem-nav-label">{group.label}</div>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`sem-nav-item${isActive(pathname, item.href) ? " is-active" : ""}`}
                >
                  {ICONS[item.icon]}
                  <span>{item.label}</span>
                  {item.badge ? <em className="sem-count">{item.badge}</em> : null}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="sem-sidebar-foot">
          本地原型 · 数据均为示例 / 未配置 / 未测。
          <br />
          未连接真实广告账户，不展示真实消耗。
        </div>
      </aside>
      <div className="sem-shell">
        <header className="sem-header">
          <div className="sem-crumb">{meta.crumb}</div>
          <div className="sem-header-mid">
            <span className="sem-pill">
              <i className="sem-dot" />
              Google Ads
            </span>
            <span className="sem-range">
              {range.start} — {range.end}
            </span>
            <div className="sem-presets">
              {DATE_PRESETS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`sem-preset${preset === p.id ? " is-active" : ""}`}
                  onClick={() => setPreset(p.id)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <div className="sem-header-right">
            <span className="sem-status-chip">数据截止 未测</span>
            {action ? (
              action.href ? (
                <Link href={action.href} className="sem-btn sem-btn-primary">
                  {action.label}
                </Link>
              ) : (
                <button type="button" className="sem-btn sem-btn-primary">
                  {action.label}
                </button>
              )
            ) : null}
            <div className="sem-user">
              <span className="sem-avatar">C</span>
              <span>
                <div className="sem-user-name">Carl</div>
                <div className="sem-user-role">运营 · 海外 SEM</div>
              </span>
            </div>
          </div>
        </header>
        <div className="sem-content">{children}</div>
        <div className="sem-page-foot">G-Snipers 海外版 · SEM 本地原型 · 非生产环境 · 不展示真实广告消耗</div>
      </div>
    </div>
  );
}
