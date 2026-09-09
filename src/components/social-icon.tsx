import type { IconType } from "react-icons";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedinIn, FaPhone, FaTelegram, FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const icons: Record<string, IconType> = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Email: FaEnvelope,
  WhatsApp: FaWhatsapp,
  Telegram: FaTelegram,
  Call: FaPhone,
  X: FaXTwitter,
  TikTok: FaTiktok,
  Discord: FaDiscord,
};

const colors: Record<string, string> = {
  LinkedIn: "#0A66C2",
  GitHub: "#181717",
  Email: "#EA4335",
  WhatsApp: "#25D366",
  Telegram: "#26A5E4",
  Call: "#4EDEA3",
  X: "#000000",
  TikTok: "#FE2C55",
  Discord: "#5865F2",
};

export function SocialIcon({ name }: { name: string }) {
  const Icon = icons[name] ?? FaEnvelope;
  return <Icon aria-hidden="true" color={colors[name] ?? "currentColor"} />;
}
