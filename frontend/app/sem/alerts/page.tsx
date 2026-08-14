"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { ALERTS, type AlertRow } from "@/components/sem/data";
import { Banner, PriorityTag, SampleTag, SemCard } from "@/components/sem/primitives";

const LEVELS = ["全部", "P0", "P1", "P2", "P3"] as const;

function toneClass(tone: AlertRow["statusTone"]) {
  if (tone === "danger") return "sem-trend-down";
  if (tone === "warn") return "";
  return "sem-muted";
}

function AlertsInner() {
  const params = useSearchParams();
  const initial = params.get("level") === "P0" ? "P0" : "全部";
  const [level, setLevel] = useState<(typeof LEVELS)[number]>(initial);
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    return ALERTS.filter((row) => {
      if (level !== "全部" && row.level !== level) return false;
      if (!q.trim()) return true;
      const hay = `${row.type}${row.object}${row.reason}${row.suggestion}`.toLowerCase();
      return hay.includes(q.trim().toLowerCase());
    });
  }, [level, q]);

  return (
    <div className="sem-stack">
      <Banner>
        预警规则为本地示例。P0 标红。操作进入人审队列，不会直接改线上广告。
      </Banner>
      <SemCard>
        <div className="sem-card-pad sem-between" style={{ flexWrap: "wrap" }}>
          <div className="sem-row">
            <h1 className="sem-h1">监控预警</h1>
            <span className="sem-prio sem-prio-p0">9 P0</span>
            <span className="sem-prio sem-prio-p1">23 P1</span>
            <SampleTag />
          </div>
          <div className="sem-row">
            <div className="sem-tabs">
              {LEVELS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`sem-tab${level === item ? " is-active" : ""}`}
                  onClick={() => setLevel(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <input
              className="sem-input"
              placeholder="搜索类型 / 对象 / 说明"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>
        <div className="sem-table-wrap">
          <table className="sem-table">
            <thead>
              <tr>
                <th>级别</th>
                <th>类型</th>
                <th>对象</th>
                <th>说明</th>
                <th>建议</th>
                <th>状态</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <PriorityTag level={row.level} />
                  </td>
                  <td>{row.type}</td>
                  <td>{row.object}</td>
                  <td>{row.reason}</td>
                  <td>{row.suggestion}</td>
                  <td className={toneClass(row.statusTone)} style={row.statusTone === "warn" ? { color: "#ffb07a" } : undefined}>
                    {row.status}
                  </td>
                  <td className="sem-muted">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SemCard>
    </div>
  );
}

export default function AlertsPage() {
  return (
    <Suspense fallback={<div className="sem-muted">加载预警…</div>}>
      <AlertsInner />
    </Suspense>
  );
}
