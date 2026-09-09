import "server-only";
import { del, list, put } from "@vercel/blob";
import type { GalleryEntry } from "@/content/gallery";
import { seedGalleryEntries } from "@/content/gallery";
const indexPath = "gallery-data/posts.json";
export function galleryStorageReady() { return Boolean(process.env.BLOB_READ_WRITE_TOKEN); }
export async function getGalleryEntries(): Promise<readonly GalleryEntry[]> { if (!galleryStorageReady()) return seedGalleryEntries; try { const result = await list({ prefix: indexPath, limit: 1 }); if (!result.blobs[0]) return seedGalleryEntries; const response = await fetch(result.blobs[0].url, { cache: "no-store" }); return response.ok ? await response.json() as GalleryEntry[] : seedGalleryEntries; } catch { return seedGalleryEntries; } }
async function saveGalleryEntries(entries: readonly GalleryEntry[]) { await put(indexPath, JSON.stringify(entries), { access: "public", allowOverwrite: true, contentType: "application/json", addRandomSuffix: false }); }
export async function createGalleryEntry(data: Omit<GalleryEntry, "id" | "image">, file: File) { if (!galleryStorageReady()) throw new Error("Gallery storage is not configured"); const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-"); const image = await put(`gallery-media/${Date.now()}-${safeName}`, file, { access: "public", addRandomSuffix: true }); const entries = await getGalleryEntries(); const entry: GalleryEntry = { ...data, id: crypto.randomUUID(), image: image.url }; await saveGalleryEntries([entry, ...entries]); return entry; }
export async function deleteGalleryEntry(id: string) { if (!galleryStorageReady()) throw new Error("Gallery storage is not configured"); const entries = await getGalleryEntries(); const target = entries.find((entry) => entry.id === id); if (!target) return false; await saveGalleryEntries(entries.filter((entry) => entry.id !== id)); if (target.image.startsWith("https://")) await del(target.image); return true; }
