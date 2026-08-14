import { STRATEGIES } from "@/components/sem/data";
import { Banner, PriorityTag, SampleTag, SemCard } from "@/components/sem/primitives";

export default function StrategyPage() {
  return (
    <div className="sem-stack">
      <Banner>
        智能策略是只读建议。没有转化信号时禁用智能出价自动应用，策略卡不是线上开关。
      </Banner>
      <div className="sem-row">
        <h1 className="sem-h1">智能策略</h1>
        <SampleTag />
      </div>
      <div className="sem-grid-3">
        {STRATEGIES.map((s) => (
          <SemCard key={s.title} className="sem-card-pad">
            <div className="sem-between">
              <PriorityTag level={s.level} />
              <SampleTag />
            </div>
            <h2 className="sem-h1" style={{ marginTop: 12 }}>
              {s.title}
            </h2>
            <p className="sem-muted" style={{ fontSize: 13, lineHeight: 1.65, marginBottom: 0 }}>
              {s.body}
            </p>
          </SemCard>
        ))}
      </div>
    </div>
  );
}
