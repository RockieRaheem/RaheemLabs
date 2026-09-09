import type { Metadata } from "next";
import { GalleryManager } from "@/components/gallery-manager";
export const metadata: Metadata = { title: "Gallery Studio", robots: { index: false, follow: false } };
export default function GalleryManage() { return <GalleryManager />; }
