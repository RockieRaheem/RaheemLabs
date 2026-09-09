import { NextResponse } from "next/server";
import { isGalleryAdmin } from "@/lib/gallery-auth";
import { deleteGalleryEntry } from "@/lib/gallery-store";
export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) { if (!await isGalleryAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); try { return NextResponse.json({ deleted: await deleteGalleryEntry((await params).id) }); } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Delete failed" }, { status: 500 }); } }
