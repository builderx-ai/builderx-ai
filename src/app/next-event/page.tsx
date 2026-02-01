'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Share2, ArrowRight, Code, Sparkles, Globe, Users, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const REGISTRATION_URL = 'https://events.teams.microsoft.com/event/e1523589-a560-45ed-b143-73a31a3ec3c8@45ea3487-09a2-4650-b1f2-3f90d29d2259';

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
            <div className="bg-gradient-to-r from-cyan-600/80 to-purple-600/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-cyan-400/30">
              🎤 线上分享会
            </div>
          </div>

          {/* Hero Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white leading-tight">
              一个人 + AI = 一个团队
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI Coding 全栈开发实战分享
            </h2>
          </div>

          {/* Tagline Bar */}
          <div className="relative mt-8 mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-20 blur-lg rounded-lg" />
            <div className="relative bg-gradient-to-r from-cyan-900/80 to-purple-900/80 border-l-4 border-cyan-500 p-4 rounded-r-lg backdrop-blur-md">
              <p className="text-lg md:text-xl font-light text-white">
                从需求分析到部署上线，我用 AI 协作完成了整个全栈项目
              </p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Code, value: "3万+", label: "行代码" },
              { icon: Globe, value: "22", label: "个页面" },
              { icon: Sparkles, value: "300+", label: "张图片" },
              { icon: Users, value: "中英", label: "双语支持" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all">
                <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Description Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              今天我想分享的，不是项目本身，而是背后的{" "}
              <span className="text-cyan-400 font-semibold">
                技术实践
              </span>
              。
            </p>
            <p>
              这是我第一个完全通过 AI Coding 实现的全栈项目。从{" "}
              <span className="text-purple-400 font-semibold">需求分析</span>、
              <span className="text-purple-400 font-semibold">UI设计</span>、
              <span className="text-purple-400 font-semibold">前后端开发</span>，到
              <span className="text-purple-400 font-semibold">服务器部署</span>
              ——全程由我借助 AI 协作完成。
            </p>
            <div className="p-4 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg border border-cyan-500/20">
              <p className="text-white font-medium">
                💡 AI 正在重新定义个人开发者的能力边界。以前需要一个团队才能完成的事情，现在一个人加上 AI，也能做到。
              </p>
            </div>
          </div>

          {/* Project Link */}
          <div className="mt-8">
            <a
              href="https://unitymuseums.org/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all"
            >
              <Globe className="w-8 h-8 text-cyan-400" />
              <div className="flex-grow">
                <div className="text-white font-semibold">Unity Museums 博物馆网站</div>
                <div className="text-sm text-gray-400">unitymuseums.org/welcome</div>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Agenda Section */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-white">分享内容</h3>
              <div className="h-1 flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent rounded-full" />
            </div>

            <div className="space-y-3">
              {[
                "AI Coding 工作流：如何与 AI 高效协作开发",
                "全栈项目架构：从设计到部署的技术选型",
                "踩坑与经验：AI 辅助开发的真实挑战",
                "Q&A 交流：AI 产品开发与网站建设问答",
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-4 flex items-center justify-between">
                    <span className="font-medium text-lg">{item}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="flex items-center gap-3 mb-6 mt-12">
            <h3 className="text-3xl font-bold text-white">时间与形式</h3>
            <div className="h-1 flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent rounded-full" />
          </div>
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-4 text-gray-200">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span className="font-mono">2026年2月5日 周四晚 7:30 - 8:30 PM（AEDT 澳洲东部时间）</span>
            </div>
            <div className="flex items-start gap-4 text-gray-200">
              <Users className="w-5 h-5 text-cyan-400 mt-1" />
              <span>线上分享会（Microsoft Teams）</span>
            </div>
          </div>

          {/* Registration QR Code */}
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

          {/* Call to Action */}
          <div className="mt-8 p-6 border border-cyan-500/30 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl backdrop-blur-sm">
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              欢迎大家提任何反馈！如果你对 <strong className="text-white">AI 产品开发</strong> 或 <strong className="text-white">网站建设</strong> 有任何问题，也欢迎一起交流。
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">AI Coding</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">全栈开发</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Claude/Cursor</span>
            </div>
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
              BuilderX AI 线上分享系列
            </div>
            <div className="h-4 w-px bg-white/30 hidden md:block" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500" />
              <span className="font-bold text-lg">BuilderX AI</span>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
