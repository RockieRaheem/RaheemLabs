import type { JournalEntry } from "@/content/types";

const entries: readonly JournalEntry[] = [];

export function getPublishedJournalEntries(): readonly JournalEntry[] {
  return entries
    .filter((entry) => entry.status === "published")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
