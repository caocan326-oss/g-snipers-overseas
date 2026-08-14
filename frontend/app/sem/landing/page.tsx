import { LANDING_PAGES } from "@/components/sem/data";
import { Banner, SampleTag, SemCard, WarnTag } from "@/components/sem/primitives";

export default function LandingPage() {
  return (
    <div className="sem-stack">
      <Banner>落地页速度与匹配度为未测。本页不请求客户站点，也不接 PageSpeed / Ads 落地页报告。</Banner>
      <SemCard>
        <div className="sem-card-pad sem-between">
          <div className="sem-row">
            <h1 className="sem-h1">落地页</h1>
            <SampleTag />
          </div>
          <WarnTag>速度未测</WarnTag>
        </div>
        <div className="sem-table-wrap">
          <table className="sem-table">
            <thead>
              <tr>
                <th>URL</th>
                <th>意图</th>
                <th>速度</th>
                <th>匹配</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              {LANDING_PAGES.map((p) => (
                <tr key={p.url}>
                  <td>{p.url}</td>
                  <td>{p.intent}</td>
                  <td>
                    <WarnTag>{p.speed}</WarnTag>
                  </td>
                  <td>{p.match}</td>
                  <td className="sem-muted">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SemCard>
    </div>
  );
}
