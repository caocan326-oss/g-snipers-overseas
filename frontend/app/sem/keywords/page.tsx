"use client";

import { useState } from "react";

import { KEYWORDS, NEGATIVE_PROPOSALS } from "@/components/sem/data";
import { Banner, SampleTag, SemCard, WarnTag } from "@/components/sem/primitives";

export default function KeywordsPage() {
  const [queued, setQueued] = useState<string[]>([]);

  return (
    <div className="sem-stack">
      <Banner>
        关键词优化只产出否定词 / 匹配方式提案。人审确认后写入变更单，不会直接改 Google Ads 关键词。
      </Banner>
      <div className="sem-grid-2">
        <SemCard>
          <div className="sem-card-pad sem-between">
            <div className="sem-row">
              <h1 className="sem-h1">关键词清单</h1>
              <SampleTag />
            </div>
            <WarnTag>质量度未测</WarnTag>
          </div>
          <div className="sem-table-wrap">
            <table className="sem-table">
              <thead>
                <tr>
                  <th>关键词</th>
                  <th>匹配</th>
                  <th>质量度</th>
                  <th>消耗</th>
                  <th>点击</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                {KEYWORDS.map((k) => (
                  <tr key={k.term}>
                    <td>{k.term}</td>
                    <td>{k.match}</td>
                    <td className="sem-muted">{k.qs}</td>
                    <td>{k.spend}</td>
                    <td>{k.clicks}</td>
                    <td>{k.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SemCard>
        <SemCard className="sem-card-pad">
          <div className="sem-between">
            <h2 className="sem-h1">否定词提案</h2>
            <span className="sem-prio sem-prio-p1">12</span>
          </div>
          <div className="sem-stack" style={{ marginTop: 12 }}>
            {NEGATIVE_PROPOSALS.map((n) => (
              <div key={n.term} className="sem-tree-item">
                <div className="sem-between">
                  <strong>{n.term}</strong>
                  <SampleTag />
                </div>
                <p className="sem-muted" style={{ fontSize: 12, margin: "8px 0" }}>
                  {n.why}
                </p>
                {queued.includes(n.term) ? (
                  <span className="sem-tag sem-tag-warn">已写入变更单 · 未改线上</span>
                ) : (
                  <button
                    type="button"
                    className="sem-btn sem-btn-primary"
                    onClick={() => setQueued((s) => [...s, n.term])}
                  >
                    人审确认 · 写入变更单
                  </button>
                )}
              </div>
            ))}
          </div>
        </SemCard>
      </div>
    </div>
  );
}
