"use client";

import { useState } from "react";

import { INSIGHTS, METRICS, REPORTS } from "@/components/sem/data";
import { Banner, SampleTag, SemCard, WarnTag } from "@/components/sem/primitives";

export default function ReportsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sem-stack">
      <Banner>报告中心只拼本地示例，不拉取 Google Ads。生成完整报告不会导出真实消耗。</Banner>
      <div className="sem-between">
        <div className="sem-row">
          <h1 className="sem-h1">报告中心</h1>
          <SampleTag />
        </div>
        <button type="button" className="sem-btn sem-btn-primary" onClick={() => setOpen(true)}>
          生成完整报告
        </button>
      </div>
      <div className="sem-grid-2">
        {REPORTS.map((r) => (
          <SemCard key={r.name} className="sem-card-pad">
            <div className="sem-between">
              <strong>{r.name}</strong>
              {r.status.includes("未") ? <WarnTag>{r.status}</WarnTag> : <span className="sem-tag">{r.status}</span>}
            </div>
            <div className="sem-muted" style={{ fontSize: 12, marginTop: 8 }}>
              {r.range}
            </div>
            <p className="sem-muted" style={{ fontSize: 13, marginBottom: 0 }}>
              {r.note}
            </p>
          </SemCard>
        ))}
      </div>
      {open ? (
        <SemCard className="sem-card-pad" id="full">
          <div className="sem-between">
            <div className="sem-row">
              <h2 className="sem-h1">完整报告（本地示例）</h2>
              <SampleTag />
            </div>
            <button type="button" className="sem-btn sem-btn-ghost" onClick={() => setOpen(false)}>
              关闭
            </button>
          </div>
          <div className="sem-grid-6" style={{ marginTop: 14 }}>
            {METRICS.map((m) => (
              <div key={m.key}>
                <div className="sem-muted" style={{ fontSize: 12 }}>
                  {m.label}
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>{m.value}</div>
              </div>
            ))}
          </div>
          <ul className="sem-list" style={{ marginTop: 16 }}>
            {INSIGHTS.findings.map((f) => (
              <li key={f.text}>{f.text}</li>
            ))}
          </ul>
          <p className="sem-muted" style={{ fontSize: 12, marginBottom: 0 }}>
            此报告未连接广告账户。授权与转化仍为未配置 / 未测。
          </p>
        </SemCard>
      ) : null}
    </div>
  );
}
