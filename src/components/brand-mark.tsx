type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="brand-mark" aria-label="RaheemLabs">
      <span className="brand-mark__monogram" aria-hidden="true">
        RL
      </span>
      {!compact && (
        <span className="brand-mark__name" aria-hidden="true">
          Raheem<span>Labs</span>
        </span>
      )}
    </span>
  );
}

