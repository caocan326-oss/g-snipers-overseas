"use client";

import { useState } from "react";

import { BUDGET_PROPOSALS } from "@/components/sem/data";
import { Banner, PriorityTag, SampleTag, SemCard } from "@/components/sem/primitives";

type LocalStatus = "open" | "queued" | "rejected";

export default function BudgetPage() {
  const [status, setStatus] = useState<Record<string, LocalStatus>>({});

  return (
    <div className="sem-stack">
      <Banner>
        预算与出价只生成提案。任何生效必须「人审确认」。本页不会直接修改 Google Ads
        线上设置。数字均为示例。
      </Banner>
      <div className="sem-between">
        <div className="sem-row">
          <h1 className="sem-h1" id="proposals">
            待确认提案
          </h1>
          <SampleTag />
        </div>
        <span className="sem-muted" style={{ fontSize: 12 }}>
          自动应用已禁用
        </span>
      </div>
      <div className="sem-grid-3">
        {BUDGET_PROPOSALS.map((p) => {
          const st = status[p.id] ?? "open";
          return (
            <SemCard key={p.id} className="sem-card-pad">
              <div className="sem-between">
                <strong style={{ fontSize: 13 }}>
                  提案 {p.id} · {p.title}
                </strong>
                <div className="sem-row">
                  <PriorityTag level={p.level} />
                  <SampleTag />
                </div>
              </div>
              <div style={{ marginTop: 14, fontSize: 13 }} className="sem-muted">
                当前 {p.current}
              </div>
              <div className="sem-suggest">
                <div className="sem-muted" style={{ fontSize: 11 }}>
                  建议
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}>{p.suggested}</div>
              </div>
              <p className="sem-muted" style={{ fontSize: 12, lineHeight: 1.6 }}>
                {p.why}
              </p>
              {st === "open" ? (
                <div className="sem-row" style={{ marginTop: 8 }}>
                  <button
                    type="button"
                    className="sem-btn sem-btn-ghost"
                    onClick={() => setStatus((s) => ({ ...s, [p.id]: "rejected" }))}
                  >
                    驳回提案
                  </button>
                  <button
                    type="button"
                    className="sem-btn sem-btn-primary"
                    onClick={() => setStatus((s) => ({ ...s, [p.id]: "queued" }))}
                  >
                    人审确认 · 写入变更单
                  </button>
                </div>
              ) : (
                <div className="sem-tag sem-tag-warn" style={{ marginTop: 8 }}>
                  {st === "queued" ? "已写入变更单 · 未改线上" : "已驳回 · 仅本地记录"}
                </div>
              )}
            </SemCard>
          );
        })}
      </div>
      <SemCard className="sem-card-pad">
        <div className="sem-between">
          <h2 className="sem-h1">出价策略</h2>
          <span className="sem-tag sem-tag-warn">自动应用已禁用</span>
        </div>
        <p className="sem-muted" style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 0 }}>
          转化信号未测，不能把 Maximize conversions / tCPA 接到真实账户。本页只展示策略说明：
          需要出价变化时生成提案，人审确认后写入变更单，不会对 Google Ads 自动改价。
        </p>
      </SemCard>
    </div>
  );
}
