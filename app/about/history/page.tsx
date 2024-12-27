import { HistoryHero } from "@/components/history-hero"
import { HistoryTimeline } from "@/components/history-timeline"

export default function HistoryPage() {
  return (
    <main className="flex-1">
      <HistoryHero />
      <HistoryTimeline />
    </main>
  )
}

