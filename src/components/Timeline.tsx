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

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative wrap overflow-hidden p-10 h-full">
      <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
      {events.map((event, index) => (
        <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'right-timeline flex-row-reverse' : 'left-timeline'}`}>
          <div className="order-1 w-5/12"></div>
          <div className={`z-20 flex items-center order-1 w-8 h-8 rounded-full shadow-xl ${event.type === 'past' ? 'bg-gray-800' : event.type === 'current' ? 'bg-purple-600 animate-pulse' : 'bg-blue-600'}`}>
          </div>
          <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${event.type === 'past' ? 'bg-gray-900 text-gray-300' : event.type === 'current' ? 'bg-purple-800/50 text-white border border-purple-500' : 'bg-blue-800/50 text-white border border-blue-500'}`}>
            <p className="mb-1 text-sm text-gray-400">{event.date}</p>
            <h3 className="mb-3 font-bold text-xl">{event.title}</h3>
            <p className="text-sm leading-snug tracking-wide ">{event.description}</p>
            {event.link && (
              <Link href={event.link} className={`mt-3 inline-block font-bold ${event.type === 'past' ? 'text-cyan-400 hover:text-cyan-300' : event.type === 'current' ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-200'}`}>
                {event.type === 'past' ? '阅读回顾' : '查看详情'} <span className="ml-1 text-xl">→</span>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
