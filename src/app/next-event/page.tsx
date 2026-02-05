'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Calendar, MapPin, ArrowRight, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

// TODO: 更新为新的报名链接
const REGISTRATION_URL = '';

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
              BuilderX AI 线下分享
            </h1>
            <h2 className="text-4xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              2026年2月 · 悉尼
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
              ，参与一场小规模、邀请制的线下分享活动。
            </p>
            <p>
              无论你是正在做 AI 产品，还是对 AI 赋能开发感兴趣，都欢迎加入我们的分享与交流。
            </p>
            <div className="space-y-3">
              <p className="text-white font-semibold">你会获得什么：</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>一线实战经验：来自真正在做产品的构建者分享</li>
                <li>技术与商业洞察：从技术实现到产品落地的全流程</li>
                <li>社区连接：认识更多志同道合的 AI 领域伙伴</li>
              </ul>
            </div>
          </div>

          {/* Agenda Section */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-white">Agenda</h3>
              <div className="h-1 flex-grow bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
            </div>

            <div className="space-y-3">
              {[
                "eSIM 项目总结：Sprint 0 验证回顾与复盘",
                "新项目讨论：下一阶段共创项目探索",
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
          <div className="flex items-center gap-3 mb-6 mt-12">
            <h3 className="text-3xl font-bold text-white">时间与地点</h3>
            <div className="h-1 flex-grow bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
          </div>
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-4 text-gray-200">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="font-mono">2026年2月15日 周日（具体时间待定）</span>
            </div>
            <div className="flex items-start gap-4 text-gray-200">
              <MapPin className="w-5 h-5 text-purple-400 mt-1" />
              <span>悉尼（具体地点待定）</span>
            </div>
          </div>

          {/* Registration Section - Hidden until URL is set */}
          {REGISTRATION_URL && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-3xl font-bold text-white">立即报名</h3>
                <div className="h-1 flex-grow bg-gradient-to-r from-green-500/50 to-transparent rounded-full" />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-gradient-to-r from-green-900/20 to-cyan-900/20 border border-green-500/30 rounded-xl backdrop-blur-sm">
                <div className="bg-white p-4 rounded-xl shadow-lg shadow-green-500/20">
                  <QRCodeSVG
                    value={REGISTRATION_URL}
                    size={160}
                    level="H"
                    includeMargin={false}
                    bgColor="#ffffff"
                    fgColor="#0a0514"
                  />
                </div>
                <div className="flex-grow text-center md:text-left space-y-4">
                  <p className="text-lg text-white font-medium">
                    扫码报名参加活动
                  </p>
                  <p className="text-sm text-gray-400">
                    使用手机扫描二维码，或点击下方按钮直接报名
                  </p>
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-green-500/25"
                  >
                    <QrCode className="w-5 h-5" />
                    点击报名
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Coming Soon Notice */}
          {!REGISTRATION_URL && (
            <div className="mt-12 p-6 border border-yellow-500/30 bg-yellow-900/20 rounded-xl backdrop-blur-sm text-center">
              <p className="text-lg text-white font-medium mb-2">
                📢 报名链接即将开放
              </p>
              <p className="text-sm text-gray-400">
                具体分享主题和嘉宾信息将很快公布，敬请关注社群动态！
              </p>
            </div>
          )}

          {/* Footer Info Box */}
          <div className="mt-16 p-6 border border-purple-500/30 bg-purple-900/20 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">BuilderX AI</strong> 致力于成为澳洲领先的 AI 创业社区，连接优秀构建者与企业家，促进合作与孵化。
            </p>
          </div>

          {/* Partner Logos Area */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-70">
            <div className="text-sm font-semibold tracking-wider uppercase">
              BuilderX AI 线下分享
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
