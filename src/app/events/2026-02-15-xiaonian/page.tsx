import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { remark } from 'remark';
import html from 'remark-html';

const markdownContent = `
# [BuilderX AI 新年小年派对回顾]

**在轻松的氛围中寻找 2026 的构建灵感**

今晚是农历小年，BuilderX AI 在 The Ranch Hotel 举办了一场非常 Relax 的线下聚会。虽然正值新年期间，到场的人数精简，但讨论的质量却极高。

我们暂时放下了沉重的 Sprint 计划，在欢快的派对氛围中，大家结合自己的环境和实际需求，进行了深入的探讨。

---

## 💡 核心交流

*   **AI 现状的真实反馈**: 脱离了新闻头条，大家在各自的实际工作环境下，到底是如何应用 AI 的？哪些工具是真正在提效，哪些还在“自嗨”？
*   **实际需求驱动**: 讨论不再停留于技术参数，而是回归到“这个技术能解决我什么问题”。
*   **连接的乐趣**: 在轻松的交流中，一些关于“下一阶段项目”的有趣火花开始迸发。

BuilderX AI 不仅仅是一个讨论技术的社团，它更是一个让构建者们在忙碌的开发生活中，能够停下来“连接、充电、再出发”的港口。

---
*BuilderX AI - 悉尼 AI 创业者实战社区*
`;

async function getProcessedContent() {
  const processedContent = await remark().use(html).process(markdownContent);
  return processedContent.toString();
}

export default async function XiaonianEventRecapPage() {
  const contentHtml = await getProcessedContent();

  return (
    <div className="min-h-screen bg-[#0a0514] text-white relative overflow-hidden flex flex-col font-sans">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      {/* Decorative glowing orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-100px] w-[300px] h-[300px] bg-cyan-600/20 rounded-full blur-[80px] pointer-events-none" />

      <main className="flex-grow flex flex-col items-center relative z-10 px-4 py-8 md:py-12 pt-24 md:pt-32">
        <div className="max-w-3xl w-full">
          <Image 
            src="/events/2026-02-15-xiaonian/event.jpg" 
            alt="Xiaonian Event Recap Image" 
            width={800}
            height={400}
            className="mx-auto mb-8 rounded-lg shadow-lg"
          />
          <article className="prose prose-invert prose-headings:text-white prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white max-w-none">
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </article>
        </div>
      </main>
    </div>
  );
}
