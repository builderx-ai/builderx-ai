import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { remark } from 'remark';
import html from 'remark-html';

const markdownContent = `
# [BuilderX AI 首次线下活动回顾]

**拒绝自嗨，拒绝盲目，我们要的是“定性开头”**

昨晚，BuilderX AI 的第一期线下共创活动圆满落幕。

没有冗长的嘉宾致辞，没有毫无边际的行业互吹。在悉尼的夜色中，一群 Builder 和 Founder 聚在一起，只做了一件事：**把“Idea”变成“可以定性的出发点”。**

---

## 🎯 核心哲学：先定性

本次活动我们践行了一个极其硬核的创业哲学：

> **一个 Idea 必须经得起全方位的审视与考验。我们要明确它的定性——到底在做什么？能否复盘？如何从不确定性中寻找确定性？只有通过严谨的定性分析，才能为下一步行动打下坚实基础，避免盲目出击，杜绝踏空。**

在创业初期，最昂贵的成本不是服务器，而是**“错误的自信”**。我们往往容易陷入自嗨，觉得自己的点子无懈可击。但 BuilderX AI 的价值观是：**Facts Over Opinions (事实 > 观点)。**

昨晚的活动现场，我们不仅是听路演，更是在进行一场**“商业逻辑的压力测试”**。

## ⚡ 现场实战：残酷但真实的 Critique

我们现场进行了 **eSIM** 和 **E-health** 等项目的路演。与常规的路演不同，台下的听众不仅仅是鼓掌的观众，更是拿着《项目可行性评估表》的**评审员**。

*   **直觉的碰撞 (Qualitative):** 我们首先基于经验和直觉，对项目的产业链逻辑、痛点真实性进行了激烈的辩论。“这个模式跑得通吗？”“真的是刚需吗？”
*   **团队的集结 (Grouping):** 争论之后，相信的人选择了加入。我们现场促成了项目小组的组建，**真正让 Idea 找到了它的 Hands**，同时也建立了未来潜在的合作连接。

## 🚀 成果：不止是聊天，而是出发

昨晚最大的成果，不仅仅是大家聊得很开心，而是我们成功促成了实质性的**项目启动**。

本次活动选定 **eSIM** 作为首个验证项目，由 Vincent 带队，正式启动 **PoC Sprint 0**。

针对现场选出的项目，我们没有止步于“觉得不错”，而是直接进入了 **Quantitative Planning (定量计划)** 阶段。项目组现场制定了未来两周的 **Sprint 0 验证计划**：

*   **最危险的假设是什么？** (Riskiest Assumption)
*   **我们怎么测？** (Experiment)
*   **通过线是多少？** (Success Metric)

接下来的两周，他们将走出房间，去验证，去寻找团队、谈 Deal、找渠道资源，用真实的市场反馈来验证今天的假设。

## 📅 下一步：项目复盘

两周后，Vincent 将带着项目的复盘数据和**实测结果 (Actual Results)** 回归。那时候，我们不再听“我觉得”，我们只看“数据显示”。

如果你也厌倦了空谈，渴望在真实的项目实战中通过“连接 × 构建”获得成长，欢迎关注 BuilderX AI。

**Let's Build. Let's Verify. Let's Grow.**

---
*BuilderX AI - 悉尼 AI 创业者实战社区*
`;

async function getProcessedContent() {
  const processedContent = await remark().use(html).process(markdownContent);
  return processedContent.toString();
}

export default async function FirstEventRecapPage() {
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
            src="/activity-1.png" 
            alt="First Event Recap Image" 
            width={800} // Adjust width as needed
            height={400} // Adjust height as needed
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
