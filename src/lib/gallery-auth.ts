import "server-only";
import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
export const galleryCookie = "raheem_gallery_session";
const password = () => process.env.GALLERY_ADMIN_PASSWORD ?? "";
const token = () => createHash("sha256").update(`${password()}:${process.env.GALLERY_SESSION_SECRET ?? ""}`).digest("hex");
export function galleryAdminConfigured() { return password().length >= 12 && (process.env.GALLERY_SESSION_SECRET?.length ?? 0) >= 24; }
export function validGalleryPassword(value: string) { if (!galleryAdminConfigured()) return false; return timingSafeEqual(Buffer.from(createHash("sha256").update(value).digest("hex")), Buffer.from(createHash("sha256").update(password()).digest("hex"))); }
export async function isGalleryAdmin() { if (!galleryAdminConfigured()) return false; const value = (await cookies()).get(galleryCookie)?.value ?? ""; const expected = token(); return value.length === expected.length && timingSafeEqual(Buffer.from(value), Buffer.from(expected)); }
export function gallerySessionToken() { return token(); }
