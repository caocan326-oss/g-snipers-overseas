"use client";

import { useState } from "react";

import { CREATIVES } from "@/components/sem/data";
import { Banner, SampleTag, SemCard, WarnTag } from "@/components/sem/primitives";

export default function CreativesPage() {
  const [queued, setQueued] = useState<string[]>([]);

  return (
    <div className="sem-stack">
      <Banner>
        创意优化只建议新标题 / 描述。确认后进入人审队列，不会直接改线上 RSA。
      </Banner>
      <div className="sem-row">
        <h1 className="sem-h1">创意优化</h1>
        <span className="sem-prio sem-prio-p1">5</span>
        <SampleTag />
      </div>
      <div className="sem-grid-3">
        {CREATIVES.map((c) => (
          <SemCard key={c.id} className="sem-card-pad">
            <div className="sem-between">
              <strong>{c.id}</strong>
              <div className="sem-row">
                {c.status === "待优化" ? <WarnTag>{c.status}</WarnTag> : <span className="sem-tag">{c.status}</span>}
                <SampleTag />
              </div>
            </div>
            <div className="sem-muted" style={{ fontSize: 12, marginTop: 8 }}>
              {c.campaign} · CTR {c.ctr}
            </div>
            <ul className="sem-list" style={{ marginTop: 10 }}>
              {c.headlines.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className="sem-muted" style={{ fontSize: 12, lineHeight: 1.6 }}>
              {c.note}
            </p>
            {c.status === "待优化" ? (
              queued.includes(c.id) ? (
                <span className="sem-tag sem-tag-warn">已写入变更单 · 未改线上</span>
              ) : (
                <button
                  type="button"
                  className="sem-btn sem-btn-primary"
                  onClick={() => setQueued((s) => [...s, c.id])}
                >
                  人审确认 · 写入变更单
                </button>
              )
            ) : null}
          </SemCard>
        ))}
      </div>
    </div>
  );
}
