import type { CSSProperties } from "react";

export function RhythmLine() {
  return (
    <div className="rhythm-line" aria-hidden="true">
      {Array.from({ length: 16 }, (_, index) => (
        <span key={index} style={{ "--beat": index } as CSSProperties} />
      ))}
    </div>
  );
}

