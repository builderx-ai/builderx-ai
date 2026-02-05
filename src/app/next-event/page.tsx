'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Share2, ArrowRight, Code, Sparkles, Globe, Users, QrCode, Lightbulb, Rocket, MessageCircle } from 'lucide-react';
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
            <div className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-purple-400/30">
              🎤 线上分享会 #2
            </div>
          </div>

          {/* Hero Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white leading-tight">
              下一期分享会
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              精彩内容即将揭晓
            </h2>
          </div>

          {/* Tagline Bar */}
          <div className="relative mt-8 mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-lg rounded-lg" />
            <div className="relative bg-gradient-to-r from-purple-900/80 to-pink-900/80 border-l-4 border-purple-500 p-4 rounded-r-lg backdrop-blur-md">
              <p className="text-lg md:text-xl font-light text-white">
                BuilderX AI 第二期线上分享会，敬请期待！
              </p>
            </div>
          </div>

          {/* Coming Soon Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Lightbulb, label: "新话题" },
              { icon: Users, label: "新嘉宾" },
              { icon: Rocket, label: "新实践" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Description Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              继第一期{" "}
              <Link href="/events/ai-coding-talk" className="text-cyan-400 font-semibold hover:underline">
                「一个人 + AI = 一个团队」
              </Link>
              {" "}分享会的成功举办，我们正在筹备下一期精彩内容。
            </p>
            <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/20">
              <p className="text-white font-medium">
                📢 具体分享主题和嘉宾信息将很快公布，敬请关注！
              </p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-white">往期精彩</h3>
              <div className="h-1 flex-grow bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
            </div>

            <Link
              href="/events/ai-coding-talk"
              className="group block relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-cyan-400 mb-1">2026年2月5日</div>
                  <span className="font-medium text-lg">一个人 + AI = 一个团队</span>
                  <div className="text-sm text-gray-400 mt-1">AI Coding 全栈开发实战分享</div>
                </div>
                <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/events/first-event-recap"
              className="group block relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-purple-400 mb-1">2026年1月25日</div>
                  <span className="font-medium text-lg">BuilderX AI 首次线下活动</span>
                  <div className="text-sm text-gray-400 mt-1">拒绝自嗨，我们要的是"定性开头"</div>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Event Details */}
          <div className="flex items-center gap-3 mb-6 mt-12">
            <h3 className="text-3xl font-bold text-white">时间与形式</h3>
            <div className="h-1 flex-grow bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
          </div>
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-4 text-gray-200">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="font-mono">2026年2月15日 周六（具体时间待定）</span>
            </div>
            <div className="flex items-start gap-4 text-gray-200">
              <Users className="w-5 h-5 text-purple-400 mt-1" />
              <span>线上分享会</span>
            </div>
          </div>

          {/* Stay Tuned */}
          <div className="mt-12 p-6 border border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl backdrop-blur-sm text-center">
            <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <p className="text-lg text-white font-medium mb-2">
              想第一时间获取活动信息？
            </p>
            <p className="text-sm text-gray-400">
              关注我们的社群，第一时间获取分享主题、嘉宾信息和报名链接
            </p>
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
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
              <span className="font-bold text-lg">BuilderX AI</span>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
