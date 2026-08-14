import Link from "next/link";

import {
  ACCOUNT,
  DEVICES,
  INSIGHTS,
  METRICS,
  PRIORITY_COUNTS,
} from "@/components/sem/data";
import { Banner, PriorityTag, SampleTag, SemCard, WarnTag } from "@/components/sem/primitives";
import { TrendChart } from "@/components/sem/trend-chart";

export default function SemDashboardPage() {
  return (
    <div className="sem-stack">
      <Banner>
        账户未配置 / 未测。看板数字均为本地示例，不能当作真实 Google Ads 消耗或线索。授权入口见
        <Link href="/sem/auth"> 账户授权</Link>。
      </Banner>

      <SemCard className="sem-card-pad">
        <div className="sem-between">
          <div className="sem-row">
            <h1 className="sem-h1">AI 每日洞察</h1>
            <SampleTag />
          </div>
          <span className="sem-muted" style={{ fontSize: 12 }}>
            基于示例结构生成，不读取线上账户
          </span>
        </div>
        <div className="sem-grid-2" style={{ marginTop: 14 }}>
          <div>
            <div className="sem-muted" style={{ fontSize: 12, marginBottom: 8 }}>
              关键发现
            </div>
            <ul className="sem-list">
              {INSIGHTS.findings.map((f) => (
                <li key={f.text}>
                  <PriorityTag level={f.level} /> <span style={{ marginLeft: 6 }}>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="sem-muted" style={{ fontSize: 12, marginBottom: 8 }}>
              建议操作
            </div>
            <ul className="sem-list">
              {INSIGHTS.actions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </SemCard>

      <SemCard className="sem-card-pad">
        <div className="sem-grid-4">
          <div>
            <div className="sem-muted" style={{ fontSize: 12 }}>
              账户
            </div>
            <div style={{ marginTop: 6, fontWeight: 650 }}>{ACCOUNT.name}</div>
          </div>
          <div>
            <div className="sem-muted" style={{ fontSize: 12 }}>
              余额
            </div>
            <div style={{ marginTop: 6 }}>
              <WarnTag>未配置</WarnTag>
            </div>
          </div>
          <div>
            <div className="sem-muted" style={{ fontSize: 12 }}>
              累计消耗
            </div>
            <div className="sem-row" style={{ marginTop: 6 }}>
              <strong>{ACCOUNT.spendToDate}</strong>
              <SampleTag />
            </div>
          </div>
          <div>
            <div className="sem-muted" style={{ fontSize: 12 }}>
              绑定状态
            </div>
            <div style={{ marginTop: 6 }}>
              <WarnTag>未绑定 / 未测</WarnTag>
            </div>
          </div>
        </div>
      </SemCard>

      <div className="sem-grid-4">
        {PRIORITY_COUNTS.map((p) => (
          <Link key={p.level} href={p.level === "P0" ? "/sem/alerts?level=P0" : "/sem/alerts"}>
            <SemCard className="sem-card-pad sem-kpi">
              <div className="sem-between">
                <PriorityTag level={p.level} />
                <span className="sem-muted" style={{ fontSize: 12 }}>
                  待处理
                </span>
              </div>
              <div className="sem-kpi-value" style={{ marginTop: 8 }}>
                {p.count}
              </div>
              <div className="sem-muted" style={{ fontSize: 12, marginTop: 4 }}>
                {p.hint}
              </div>
            </SemCard>
          </Link>
        ))}
      </div>

      <div className="sem-grid-6">
        {METRICS.map((m) => (
          <SemCard key={m.key} className="sem-card-pad sem-metric">
            <div className="sem-between">
              <span className="sem-metric-label">{m.label}</span>
              {m.sample ? <SampleTag /> : <WarnTag>未测</WarnTag>}
            </div>
            <div className="sem-metric-value">{m.value}</div>
            <div
              className={m.up === true ? "sem-trend-up" : m.up === false ? "sem-trend-down" : "sem-muted"}
              style={{ fontSize: 12, marginTop: 6 }}
            >
              {m.delta}
            </div>
          </SemCard>
        ))}
      </div>

      <div className="sem-grid-2">
        <SemCard className="sem-card-pad">
          <div className="sem-between">
            <div className="sem-row">
              <h2 className="sem-h1">消耗 vs 点击</h2>
              <SampleTag />
            </div>
            <div className="sem-row" style={{ fontSize: 12 }}>
              <span style={{ color: "#ff6a1a" }}>● 消耗</span>
              <span className="sem-muted">— 点击</span>
            </div>
          </div>
          <TrendChart />
        </SemCard>
        <div className="sem-stack">
          <SemCard className="sem-card-pad">
            <div className="sem-between">
              <h2 className="sem-h1">月预算使用</h2>
              <WarnTag>未配置</WarnTag>
            </div>
            <div className="sem-between" style={{ marginTop: 14 }}>
              <span style={{ fontSize: 28, fontWeight: 750 }}>67.8%</span>
              <SampleTag>示例进度</SampleTag>
            </div>
            <div className="sem-progress" style={{ marginTop: 12 }}>
              <span style={{ width: "67.8%" }} />
            </div>
            <p className="sem-muted" style={{ fontSize: 12, margin: "10px 0 0" }}>
              月预算未从账户读取。进度条仅用于界面示意。
            </p>
          </SemCard>
          <SemCard className="sem-card-pad">
            <div className="sem-between">
              <h2 className="sem-h1">设备维度</h2>
              <SampleTag />
            </div>
            <div className="sem-stack" style={{ marginTop: 12 }}>
              {DEVICES.map((d) => (
                <div key={d.name}>
                  <div className="sem-between" style={{ fontSize: 12, marginBottom: 6 }}>
                    <span>
                      {d.name} · {d.share}%
                    </span>
                    <span className="sem-muted">
                      点击 {d.clicks} · CPC {d.cpc}
                    </span>
                  </div>
                  <div className="sem-bar">
                    <span
                      style={{
                        width: `${d.share}%`,
                        background: d.name === "Mobile" ? "#ff6a1a" : d.name === "PC" ? "#d8d8d8" : "#6a6a6a",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SemCard>
        </div>
      </div>
    </div>
  );
}
