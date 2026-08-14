import type { HTMLAttributes, ReactNode } from "react";

export function SampleTag({ children = "示例" }: { children?: ReactNode }) {
  return <span className="sem-tag sem-tag-sample">{children}</span>;
}

export function WarnTag({ children }: { children: ReactNode }) {
  return <span className="sem-tag sem-tag-warn">{children}</span>;
}

export function PriorityTag({ level }: { level: "P0" | "P1" | "P2" | "P3" }) {
  return <span className={`sem-prio sem-prio-${level.toLowerCase()}`}>{level}</span>;
}

export function SemCard({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`sem-card ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function Banner({ children }: { children: ReactNode }) {
  return (
    <div className="sem-banner">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 9v4M12 17h.01" />
        <path d="M10.3 4.3 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z" />
      </svg>
      <div>{children}</div>
    </div>
  );
}
