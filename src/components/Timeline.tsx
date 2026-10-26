import React from 'react';
import Link from 'next/link';

interface Event {
  date: string;
  title: string;
  description: string;
  link?: string;
  type: 'past' | 'current' | 'upcoming' | 'planned';
}

interface TimelineProps {
  events: Event[];
}

const dotClass = (type: Event['type']) =>
  type === 'past' ? 'bg-gray-800' : type === 'current' ? 'bg-purple-600 animate-pulse' : 'bg-blue-600';

const cardClass = (type: Event['type']) =>
  type === 'past'
    ? 'bg-gray-900 text-gray-300'
    : type === 'current'
      ? 'bg-purple-800/50 text-white border border-purple-500'
      : 'bg-blue-800/50 text-white border border-blue-500';

// Mobile: single column with the line on the left.
// md and up: the original alternating left/right layout.
const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <ol className="relative py-6 md:p-10">
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-4 w-px bg-gray-700/60 md:left-1/2 md:-translate-x-1/2"
      />
      {events.map((event, index) => {
        const reverse = index % 2 === 0;
        return (
          <li
            key={index}
            className={`relative mb-8 flex items-start pl-12 md:items-center md:justify-between md:pl-0 ${
              reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="hidden md:block md:w-5/12" />
            <div
              aria-hidden
              className={`absolute left-4 top-5 h-4 w-4 -translate-x-1/2 rounded-full shadow-xl md:static md:z-20 md:h-8 md:w-8 md:translate-x-0 ${dotClass(event.type)}`}
            />
            <div className={`w-full rounded-lg px-6 py-4 shadow-xl md:w-5/12 ${cardClass(event.type)}`}>
              <p className="mb-1 text-sm text-gray-400">{event.date}</p>
              <h3 className="mb-3 text-xl font-bold" style={{ textWrap: 'balance' }}>{event.title}</h3>
              <p className="text-sm tracking-wide" style={{ textWrap: 'pretty' }}>{event.description}</p>
              {event.link && (
                <Link
                  href={event.link}
                  className={`mt-3 inline-block rounded font-bold transition-colors duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    event.type === 'past' ? 'text-cyan-400 hover:text-cyan-300' : 'text-white hover:text-gray-200'
                  }`}
                >
                  {event.type === 'past' ? '阅读回顾' : '查看详情'} <span aria-hidden className="ml-1 text-xl">→</span>
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Timeline;
