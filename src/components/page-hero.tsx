export function PageHero({ index, label, title, description }: { index: string; label: string; title: React.ReactNode; description?: string }) {
  return <header className="page-hero"><div className="eyebrow"><span>{index}</span> / {label}</div><h1 className="display">{title}</h1>{description && <p>{description}</p>}<div className="page-hero__status"><span>STATUS: ACTIVE</span><span>LOCATION: UGANDA</span><span>UPTIME: LEARNING</span></div></header>;
}
