import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import { UPCOMING, PAST } from '@/data/events';

// Events index. Not linked from the homepage yet (Cheney reviews it first).
// Event data lives in src/data/events.ts.

export const metadata = {
  title: '活动',
  description: 'BuilderX AI 即将到来的线上分享与悉尼线下活动，以及往期活动回顾。',
};

const btnPrimary =
  'inline-flex items-center rounded-md bg-white px-3 py-2 text-base font-semibold text-black transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black';
const btnSecondary =
  'inline-flex items-center rounded-md border border-white/20 px-3 py-2 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-grow px-4 pt-28 pb-16">
        <div className="mx-auto max-w-4xl">
          <header className="pb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-500">Events</p>
            <h1
              className="mt-3 text-5xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9B9B9B]"
              style={{ textWrap: 'balance' }}
            >
              即将到来
            </h1>
            <p className="mt-5 max-w-[680px] text-lg text-gray-400" style={{ textWrap: 'pretty' }}>
              线上分享随时加入，悉尼线下活动欢迎带上家人朋友。
            </p>
          </header>

          <section aria-label="即将到来的活动" className="space-y-4">
            {UPCOMING.map((e) => (
              <article key={e.title} className="rounded-2xl border border-white/10 bg-[#181818] p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  {e.tag && (
                    <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-black">{e.tag}</span>
                  )}
                  <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs font-semibold text-gray-300">{e.format}</span>
                  <span className="font-mono text-sm text-gray-400">{e.date}</span>
                </div>
                <h2 className="mt-4 text-3xl font-bold" style={{ textWrap: 'balance' }}>{e.title}</h2>
                <p className="mt-2 text-sm text-gray-500">
                  {e.time}
                  {e.host && (
                    <>
                      {' · 分享人 '}
                      {e.hostUrl ? (
                        <a href={e.hostUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 underline underline-offset-4 transition-colors duration-300 hover:text-white">
                          {e.host}
                        </a>
                      ) : (
                        e.host
                      )}
                    </>
                  )}
                </p>
                <p className="mt-4 max-w-2xl text-base text-gray-300" style={{ textWrap: 'pretty' }}>{e.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {e.cta.external ? (
                    <a href={e.cta.href} target="_blank" rel="noopener noreferrer" className={btnPrimary}>{e.cta.label}</a>
                  ) : (
                    <Link href={e.cta.href} className={btnPrimary}>{e.cta.label}</Link>
                  )}
                  {e.secondary && <Link href={e.secondary.href} className={btnSecondary}>{e.secondary.label}</Link>}
                </div>
              </article>
            ))}
          </section>

          <section aria-label="往期活动" className="mt-16">
            <h2 className="text-xl font-bold text-gray-300">往期活动</h2>
            <ul className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10">
              {PAST.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="flex items-center justify-between gap-4 px-6 py-4 transition-colors duration-300 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                  >
                    <span className="text-base font-semibold">{p.title}</span>
                    <span className="shrink-0 font-mono text-sm text-gray-500">{p.date} →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
