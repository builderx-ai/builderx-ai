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
      description: '第一期线下共创活动圆满落幕，拒绝自嗨，我们要的是"定性开头"。',
      link: '/events/first-event-recap',
      type: 'past',
    },
    {
      date: '2026年2月5日',
      title: '一个人 + AI = 一个团队',
      description: 'AI Coding 全栈开发实战分享：3万行代码、22个页面，从需求分析到部署上线的全流程分享。',
      link: '/events/ai-coding-talk',
      type: 'past',
    },
    {
      date: '2月15日 周日',
      title: '下一期线下分享会',
      description: '更多精彩内容即将揭晓，敬请期待！',
      link: '/next-event',
      type: 'current',
    },
    {
      date: '待定',
      title: '第二期线下活动筹划中',
      description: '即将带来项目回顾，以及更精彩的共创主题和实战项目，敬请期待！',
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
            src="/favicon.png" 
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
