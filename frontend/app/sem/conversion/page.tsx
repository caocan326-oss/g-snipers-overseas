import { CONVERSIONS } from "@/components/sem/data";
import { Banner, SampleTag, SemCard, WarnTag } from "@/components/sem/primitives";

export default function ConversionPage() {
  return (
    <div className="sem-stack">
      <Banner>
        转化追踪未配置 / 未测。线索与 CPL 不能用 0 充数。本页不提供标签安装向导或 API 写入。
      </Banner>
      <SemCard>
        <div className="sem-card-pad sem-between">
          <div className="sem-row">
            <h1 className="sem-h1">转化追踪</h1>
            <SampleTag />
          </div>
          <WarnTag>无回传</WarnTag>
        </div>
        <div className="sem-table-wrap">
          <table className="sem-table">
            <thead>
              <tr>
                <th>转化操作</th>
                <th>类型</th>
                <th>状态</th>
                <th>窗口</th>
                <th>近 7 日次数</th>
              </tr>
            </thead>
            <tbody>
              {CONVERSIONS.map((c) => (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td>{c.type}</td>
                  <td>
                    <WarnTag>{c.status}</WarnTag>
                  </td>
                  <td className="sem-muted">{c.window}</td>
                  <td className="sem-muted">{c.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SemCard>
    </div>
  );
}
