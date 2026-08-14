import { ASSETS } from "@/components/sem/data";
import { Banner, SampleTag, SemCard, WarnTag } from "@/components/sem/primitives";

export default function AssetsPage() {
  return (
    <div className="sem-stack">
      <Banner>物料资产为本地结构示意，未同步到 Google Ads，也没有可上传的生产接口。</Banner>
      <div className="sem-row">
        <h1 className="sem-h1">物料资产</h1>
        <SampleTag />
      </div>
      <div className="sem-grid-2">
        {ASSETS.map((a) => (
          <SemCard key={a.kind} className="sem-card-pad">
            <div className="sem-between">
              <strong>{a.kind}</strong>
              <span className="sem-tag">{a.status}</span>
            </div>
            <p style={{ margin: "12px 0 8px", fontSize: 14 }}>{a.name}</p>
            <WarnTag>{a.extra}</WarnTag>
          </SemCard>
        ))}
      </div>
    </div>
  );
}
