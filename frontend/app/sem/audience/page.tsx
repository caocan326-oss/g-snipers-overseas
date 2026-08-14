import { AUDIENCES } from "@/components/sem/data";
import { Banner, SampleTag, SemCard, WarnTag } from "@/components/sem/primitives";

export default function AudiencePage() {
  return (
    <div className="sem-stack">
      <Banner>
        受众与定向为观察清单。再营销 / 客户匹配未配置，不会假装已有像素或 CRM 名单。
      </Banner>
      <div className="sem-row">
        <h1 className="sem-h1">受众与定向</h1>
        <SampleTag />
      </div>
      <div className="sem-grid-2">
        {AUDIENCES.map((a) => (
          <SemCard key={a.name} className="sem-card-pad">
            <div className="sem-between">
              <strong>{a.name}</strong>
              <span className="sem-tag">{a.type}</span>
            </div>
            <div style={{ marginTop: 12 }} className="sem-row">
              <span className="sem-muted" style={{ fontSize: 12 }}>
                出价
              </span>
              {a.bid.includes("未配置") ? <WarnTag>{a.bid}</WarnTag> : <span className="sem-tag">{a.bid}</span>}
            </div>
            <p className="sem-muted" style={{ fontSize: 13, marginBottom: 0, lineHeight: 1.6 }}>
              {a.note}
            </p>
          </SemCard>
        ))}
      </div>
    </div>
  );
}
