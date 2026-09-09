type SocialIconProps = { name: string };

export function SocialIcon({ name }: SocialIconProps) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const icons: Record<string, React.ReactNode> = {
    LinkedIn: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10v7M7.5 7.5v.01M11 17v-7m0 3c.7-2 5.5-2.2 5.5 1.4V17" /></>,
    GitHub: <><path d="M9 19c-4 .9-4-2-5-2.5M14.5 21v-3.5c0-1 .1-1.4-.5-2 3.2-.35 6.5-1.6 6.5-7A5.5 5.5 0 0 0 19 4.7 5 5 0 0 0 18.9 1S17.7.6 15 2.5a13 13 0 0 0-6 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 4.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.65 6.5 7-.6.6-.6 1.2-.5 2V21" /></>,
    Email: <><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    WhatsApp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L3 20l1.5-5A8 8 0 1 1 20 11.5Z" /><path d="M8.3 7.7c.4 3.7 2.3 5.6 6 6l1.2-1.2" /></>,
    Telegram: <path d="m3 11 17-7-5 16-4-6-4 3 1-5 8-5-10 7Z" />,
    Call: <path d="M5.2 3h3l1.5 5-2 1.4a14 14 0 0 0 6.9 6.9l1.4-2 5 1.5v3A2.2 2.2 0 0 1 18.8 21C10.1 20.5 3.5 13.9 3 5.2A2.2 2.2 0 0 1 5.2 3Z" />,
    X: <path d="M4 4l16 16M20 4 4 20" />,
    TikTok: <><path d="M14 4v10.5a4.5 4.5 0 1 1-4-4.47" /><path d="M14 4c.7 3 2.5 4.5 5 4.7" /></>,
    Discord: <><path d="M7 7a15 15 0 0 1 10 0l2 9a12 12 0 0 1-3 2l-1.5-2a9 9 0 0 1-5 0L8 18a12 12 0 0 1-3-2Z" /><path d="M9 12h.01M15 12h.01" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>{icons[name]}</svg>;
}
