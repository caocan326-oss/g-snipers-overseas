import { CAMPAIGNS } from "@/components/sem/data";
import { Banner, SampleTag, SemCard, WarnTag } from "@/components/sem/primitives";

export default function CampaignsPage() {
  return (
    <div className="sem-stack">
      <Banner>
        计划与单元为只读结构树。不提供启用 / 暂停，避免被理解为已改线上投放。
      </Banner>
      <SemCard className="sem-card-pad">
        <div className="sem-between">
          <div className="sem-row">
            <h1 className="sem-h1">计划与单元</h1>
            <SampleTag />
          </div>
          <WarnTag>只读 · 无启停</WarnTag>
        </div>
        <div className="sem-tree" style={{ marginTop: 14 }}>
          {CAMPAIGNS.map((c) => (
            <div key={c.name} className="sem-tree-item">
              <div className="sem-between">
                <strong>{c.name}</strong>
                <div className="sem-row">
                  <span className="sem-tag">{c.status}</span>
                  <span className="sem-muted" style={{ fontSize: 12 }}>
                    消耗 {c.spend}
                  </span>
                </div>
              </div>
              <div className="sem-tree-children">
                {c.children.map((child) => (
                  <div key={child.name} className="sem-between" style={{ fontSize: 13 }}>
                    <span>{child.name}</span>
                    <span className="sem-muted">
                      {child.status} · {child.spend}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SemCard>
    </div>
  );
}
