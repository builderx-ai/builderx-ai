import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Share2, ArrowRight } from 'lucide-react';

export default function NextEventPage() {
  return (
    <div className="min-h-screen bg-[#0a0514] text-white relative overflow-hidden flex flex-col font-sans">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      {/* Decorative glowing orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-100px] w-[300px] h-[300px] bg-cyan-600/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Added pt-24 to prevent navbar overlap */}
      <main className="flex-grow flex flex-col items-center relative z-10 px-4 py-8 md:py-12 pt-24 md:pt-32">
        <div className="max-w-2xl w-full space-y-8">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-8">
            <div className="bg-white text-black px-3 py-1 font-bold text-sm tracking-wider uppercase">
              BuilderX AI
            </div>
            <div className="bg-purple-600/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-purple-400/30">
              特别邀请 · 请勿转发
            </div>
          </div>

          {/* Hero Title */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight">
              BuilderX AI 线下共创活动
            </h1>
            <h2 className="text-4xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              2026年1月 · 悉尼
            </h2>
          </div>

          {/* Tagline Bar */}
          <div className="relative mt-8 mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-lg rounded-lg" />
            <div className="relative bg-gradient-to-r from-purple-900/80 to-blue-900/80 border-l-4 border-purple-500 p-4 rounded-r-lg backdrop-blur-md">
              <p className="text-xl md:text-2xl font-light tracking-widest text-white uppercase">
                ( 连接 × 构建 × 成长 × 探索 ) × AI
              </p>
            </div>
          </div>

          {/* Description Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              我们邀请在{" "}
              <span className="text-purple-400 font-semibold">
                AI / Agent 领域真实在做产品的构建者、产品经理、创始人、工程师与增长伙伴
              </span>
              ，参与一场小规模、邀请制、强调产出的线下共创活动。
            </p>
            <p>
              本期计划招募约 20 位精选参与者。为保证交流密度与每位参与者的收获，活动采用邀请 + 审核报名机制。
            </p>
            <p>
              你可以带着正在做的产品 / 想法原型 / 真实需求来——我们更看重“动手构建”和“共同推进”。
            </p>
            <div className="space-y-3">
              <p className="text-white font-semibold">你会获得什么：</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>结识在同一方向真的在做的伙伴</li>
                <li>以共创方式快速迭代想法：从定位 → 方案 → Demo → 增长演练</li>
                <li>在两周内完成一次可展示的构建成果（MVP / 实验 / 增长方案均可）</li>
              </ul>
            </div>
          </div>

          {/* Agenda Section */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-white">活动形式（拟）</h3>
              <div className="h-1 flex-grow bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
            </div>

            <div className="space-y-3">
              {[
                "BuilderX AI 致辞与愿景",
                "特邀嘉宾分享（确认中）",
                "参与者产品/想法路演（每人 3-5 分钟）",
                "组队与选题：目标定义 + 构建计划",
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-4 flex items-center justify-between">
                    <span className="font-medium text-lg">{item}</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                "两周共创周期：每周线上同步 + 进度推进（含获客/增长演练）",
                "线下 Demo Day：展示成果 + 复盘与下一步",
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-4 flex items-center justify-between">
                    <span className="font-medium text-lg">{item}</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-white">时间与地点（拟）</h3>
              <div className="h-1 flex-grow bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
            </div>
          <div className="mt-12 space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-4 text-gray-200">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="font-mono">2026年1月（具体日期确认中，报名后通知）</span>
            </div>
            <div className="flex items-start gap-4 text-gray-200">
              <MapPin className="w-5 h-5 text-purple-400 mt-1" />
              <span>悉尼（CBD 附近，场地确认中）</span>
            </div>
          </div>

          {/* QR Code / Registration Area */}
          <div className="mt-12 flex flex-col items-center justify-center space-y-4">
            <p className="text-sm font-semibold text-white">扫码报名 / 咨询（备注：BuilderX AI 共创）</p>
            <div className="p-1 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500">
              <div className="bg-white p-2 rounded-lg">
                <Image
                  src="/qr-code.png"
                  alt="BuilderX AI 群二维码"
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-sm object-contain"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center max-w-xs">
              建议你直接发送：你的方向 / 正在做的产品（或想法）/ 你最想解决的问题，我们会尽快回复。
            </p>
            
            <Button
              asChild
              className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              <Link href="https://builderxai.notion.site/">我想知道更多</Link>
            </Button>
          </div>

          {/* Footer Info Box */}
          <div className="mt-16 p-6 border border-purple-500/30 bg-purple-900/20 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">BuilderX AI</strong> 致力于成为澳洲领先的 AI 创业社区，连接优秀构建者与企业家，促进合作与孵化。
            </p>
          </div>

          {/* Partner Logos Area */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-70">
            <div className="text-sm font-semibold tracking-wider uppercase">
              合作伙伴：持续更新
            </div>
            <div className="h-4 w-px bg-white/30 hidden md:block" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-red-500" />
              <span className="font-bold text-lg">BuilderX AI</span>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
