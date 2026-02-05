import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { remark } from 'remark';
import html from 'remark-html';

const markdownContent = `
# [一个人 + AI = 一个团队] 线上分享回顾

**AI Coding 全栈开发实战分享圆满结束**

2月5日晚，BuilderX AI 首次线上分享会成功举办。一位社区成员分享了他如何用 AI 独立完成一个完整全栈项目的真实经历。

---

## 🎯 分享亮点

本次分享的核心观点：

> **AI 正在重新定义个人开发者的能力边界。以前需要一个团队才能完成的事情，现在一个人加上 AI，也能做到。**

分享者用 AI 辅助完成了 [Unity Museums 博物馆网站](https://unitymuseums.org/welcome)，一个真正上线运行的完整项目：

- **3万+ 行代码**
- **22 个页面**
- **300+ 张图片、30+ 个视频**
- **中英双语支持**
- **从需求分析、UI设计、前后端开发到服务器部署，全流程完成**

## ⚡ 核心内容

### 1. AI Coding 工作流
- 如何与 AI 高效协作开发
- Prompt 工程的实战技巧
- 任务拆解与迭代策略

### 2. 全栈项目架构
- 技术选型的考量
- 前后端分离 vs 全栈框架
- 部署方案的选择

### 3. 踩坑与经验
- AI 生成代码的质量把控
- 多语言支持的实现
- 图片视频资源的处理

### 4. Q&A 精华
现场观众提出了许多精彩问题，涵盖工具选择、成本控制、学习路径等话题。

## 🚀 关键收获

1. **从小开始**: 不要一开始就想做大项目，从小需求切入
2. **迭代思维**: AI 不会一次给你完美答案，需要反复调整
3. **理解优先**: 不要盲目复制 AI 的代码，要理解它在做什么
4. **工具组合**: 不同的 AI 工具有不同的强项，学会组合使用

## 📅 下一步

感谢所有参与本次分享的朋友！如果你也想分享自己的 AI 实践经验，欢迎联系我们。

BuilderX AI 将继续举办更多高质量的分享和共创活动，敬请期待！

---
*BuilderX AI - 澳洲 AI 创业者实战社区*
`;

async function getProcessedContent() {
  const processedContent = await remark().use(html).process(markdownContent);
  return processedContent.toString();
}

export default async function AICodingTalkRecapPage() {
  const contentHtml = await getProcessedContent();

  return (
    <div className="min-h-screen bg-[#0a0514] text-white relative overflow-hidden flex flex-col font-sans">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
      {/* Decorative glowing orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-600/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-100px] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />

      <main className="flex-grow flex flex-col items-center relative z-10 px-4 py-8 md:py-12 pt-24 md:pt-32">
        <div className="max-w-3xl w-full">
          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: "3万+", label: "行代码" },
              { value: "22", label: "个页面" },
              { value: "300+", label: "张图片" },
              { value: "中英", label: "双语" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white max-w-none">
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </article>
        </div>
      </main>
    </div>
  );
}
