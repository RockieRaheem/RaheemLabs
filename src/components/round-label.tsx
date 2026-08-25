import type { ReactNode } from "react";

type RoundLabelProps = {
  index: string;
  children: ReactNode;
  tone?: "default" | "copper" | "green";
};

export function RoundLabel({
  index,
  children,
  tone = "default",
}: RoundLabelProps) {
  return (
    <p className={`round-label round-label--${tone}`}>
      <span>{index}</span>
      {children}
    </p>
  );
}

