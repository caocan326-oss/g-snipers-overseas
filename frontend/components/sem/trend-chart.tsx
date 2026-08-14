import { TREND } from "./data";

const W = 640;
const H = 220;
const PAD = { t: 18, r: 18, b: 28, l: 36 };

function line(values: number[]) {
  const max = Math.max(...values) * 1.15;
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;
  return values
    .map((v, i) => {
      const x = PAD.l + (innerW * i) / (values.length - 1);
      const y = PAD.t + innerH - (v / max) * innerH;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export function TrendChart() {
  const spend = TREND.map((d) => d.spend);
  const clicks = TREND.map((d) => d.clicks);
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="220" role="img" aria-label="消耗与点击趋势示例">
      {[0, 0.25, 0.5, 0.75, 1].map((p) => {
        const y = PAD.t + innerH * (1 - p);
        return <line key={p} x1={PAD.l} x2={W - PAD.r} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />;
      })}
      <path d={line(spend)} fill="none" stroke="#ff6a1a" strokeWidth="2.2" />
      <path d={line(clicks)} fill="none" stroke="#8a8a8a" strokeWidth="1.6" strokeDasharray="5 4" />
      {TREND.map((d, i) => {
        const x = PAD.l + (innerW * i) / (TREND.length - 1);
        return (
          <text key={d.day} x={x} y={H - 8} textAnchor="middle" fill="#6a6a6a" fontSize="10">
            {d.day}
          </text>
        );
      })}
    </svg>
  );
}
