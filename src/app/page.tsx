import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FlowingLinesBackground from '@/components/FlowingLinesBackground';
import Timeline from '@/components/Timeline'; // Import the Timeline component
import Image from 'next/image';

interface Event {
  date: string;
  title: string;
  description: string;
  link?: string;
  type: 'past' | 'current' | 'upcoming' | 'planned';
}

export default function Home() {
  const events: Event[] = [
    {
      date: '2026年1月25日',
      title: 'BuilderX AI 首次线下活动',
      description: '第一期线下共创活动圆满落幕，拒绝自嗨，我们要的是“定性开头”。',
      link: '/events/first-event-recap',
      type: 'past',
    },
    {
      date: '待定',
      title: '下一次线上分享会',
      description: '特邀嘉宾分享AI前沿技术与创业经验。',
      link: '/next-event',
      type: 'upcoming',
    },
    {
      date: '待定',
      title: '第二期线下活动筹划中',
      description: '即将带来更精彩的共创主题和实战项目，敬请期待！',
      type: 'planned',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <Navbar />

      {/* New Canvas Background */}
      <FlowingLinesBackground />

      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 text-center">
        <div className="max-w-3xl w-full space-y-8 py-12">
          <Image 
            src="/builderx-ai-logo.png" 
            alt="BuilderX AI Logo" 
            width={600} 
            height={600} 
            className="mx-auto mb-8"
          />
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Australia Top AI community that connects builders and founders.
          </p>

          {/* Timeline Section */}
          <section className="w-full text-left mt-12">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">我们的旅程</h2>
            <Timeline events={events} />
          </section>

        </div>
      </main>

    </div>
  );
}
