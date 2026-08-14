import { AUTH_CHECKLIST, AUTH_FIELDS } from "@/components/sem/data";
import { Banner, SemCard, WarnTag } from "@/components/sem/primitives";

export default function AuthPage() {
  return (
    <div className="sem-stack">
      <Banner>本页只展示授权状态。原型未接入 OAuth，没有可点击的授权跳转，避免空链。</Banner>
      <SemCard className="sem-card-pad">
        <div className="sem-row" style={{ gap: 18 }}>
          <div className="sem-hero-icon">
            未配置
          </div>
          <div>
            <h1 className="sem-h1">Google Ads 账户授权</h1>
            <p className="sem-muted" style={{ fontSize: 13, margin: "8px 0 12px", lineHeight: 1.6 }}>
              状态为未绑定 / 未测；CID / MCC 为空。消耗与转化均为占位，不能当作已接通广告账户。
            </p>
            <div className="sem-row">
              <span className="sem-tag sem-tag-warn">OAuth 未接入</span>
              <span className="sem-tag sem-tag-warn">API 未测</span>
              <span className="sem-tag">本地原型</span>
            </div>
          </div>
        </div>
      </SemCard>
      <div className="sem-grid-2">
        <SemCard className="sem-card-pad">
          <h2 className="sem-h1">绑定信息</h2>
          <dl className="sem-kv" style={{ marginTop: 14 }}>
            {AUTH_FIELDS.map((row) => (
              <div key={row.k} style={{ display: "contents" }}>
                <dt>{row.k}</dt>
                <dd style={{ margin: 0 }}>{row.v === "Google Ads" ? row.v : <WarnTag>{row.v}</WarnTag>}</dd>
              </div>
            ))}
          </dl>
        </SemCard>
        <SemCard className="sem-card-pad">
          <h2 className="sem-h1">上线前清单（只读）</h2>
          <ol className="sem-list" style={{ marginTop: 12 }}>
            {AUTH_CHECKLIST.map((item) => (
              <li key={item.n} className="sem-between" style={{ listStyle: "decimal" }}>
                <span>{item.text}</span>
                <span className={item.status === "阻塞中" ? "sem-tag" : "sem-tag sem-tag-warn"}>{item.status}</span>
              </li>
            ))}
          </ol>
          <button type="button" className="sem-btn sem-btn-ghost" disabled style={{ marginTop: 8 }}>
            授权入口未开放
          </button>
        </SemCard>
      </div>
    </div>
  );
}
