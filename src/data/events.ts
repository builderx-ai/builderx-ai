// Shared event data for /events and the homepage. Add or move events here.

export interface UpcomingEvent {
  date: string;
  time: string;
  format: '线上' | '线下';
  title: string;
  host?: string;
  hostUrl?: string;
  summary: string;
  cta: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string };
  tag?: string;
}

// Empty = homepage "即将到来" section is hidden and /events shows only past events.
// (AI Eco-Fashion Runway, 11 月底, was cancelled.)
export const UPCOMING: UpcomingEvent[] = [];

export interface PastEvent {
  date: string;
  title: string;
  note?: string;
  href?: string; // recap page; omit if there is none yet
}

export const PAST: PastEvent[] = [
  { date: '2026 年 10 月 30 日', title: 'Showcase：在 Cloudflare 上跑 MCP', note: '线上分享 · Bill Wang' },
  { date: '2026 年 2 月 15 日', title: '新年小年派对', href: '/events/2026-02-15-xiaonian' },
  { date: '2026 年 2 月 5 日', title: '一个人 + AI = 一个团队', href: '/events/ai-coding-talk' },
  { date: '2026 年 1 月 25 日', title: 'BuilderX AI 首次线下活动', href: '/events/first-event-recap' },
];

