type ArrowIconProps = {
  direction?: "up-right" | "down";
};

export function ArrowIcon({ direction = "up-right" }: ArrowIconProps) {
  return (
    <svg className={`arrow-icon arrow-icon--${direction}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

