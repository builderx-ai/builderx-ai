import Link from 'next/link';
import { UPCOMING } from '@/data/events';

// Homepage "即将到来" section. Shows the same data as /events.
const UpcomingEvents = () => {
  if (UPCOMING.length === 0) return null;
  return (
    <section aria-labelledby="upcoming-title" className="w-full text-left mt-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="upcoming-title" className="text-4xl font-bold text-white">即将到来</h2>
        <Link
          href="/events"
          className="shrink-0 rounded text-sm font-semibold text-gray-400 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          全部活动 →
        </Link>
      </div>
      <div className={`grid gap-4 ${UPCOMING.length > 1 ? 'md:grid-cols-2' : ''}`}>
        {UPCOMING.map((e) => (
          <article key={e.title} className="flex flex-col rounded-2xl border border-white/10 bg-[#181818]/90 p-6 backdrop-blur-sm">
            <div className="flex flex-wrap items-center gap-2">
              {e.tag && <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-black">{e.tag}</span>}
              <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs font-semibold text-gray-300">{e.format}</span>
              <span className="font-mono text-sm text-gray-400">{e.date}</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white" style={{ textWrap: 'balance' }}>{e.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{e.time}{e.host ? ` · 分享人 ${e.host}` : ''}</p>
            <p className="mt-3 flex-grow text-sm text-gray-300" style={{ textWrap: 'pretty' }}>{e.summary}</p>
            <div className="mt-5">
              {e.cta.external ? (
                <a
                  href={e.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {e.cta.label}
                </a>
              ) : (
                <Link
                  href={e.cta.href}
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {e.cta.label}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
