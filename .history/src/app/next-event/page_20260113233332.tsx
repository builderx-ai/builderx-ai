import React from 'react';
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
              邀请函
            </div>
          </div>

          {/* Hero Title */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight">
              AI 创始人酒会
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              悉尼站
            </h2>
          </div>

          {/* Tagline Bar */}
          <div className="relative mt-8 mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-lg rounded-lg" />
            <div className="relative bg-gradient-to-r from-purple-900/80 to-blue-900/80 border-l-4 border-purple-500 p-4 rounded-r-lg backdrop-blur-md">
              <p className="text-xl md:text-2xl font-light tracking-widest text-white uppercase">
                连接 · AI · 构建 · 增长
              </p>
            </div>
          </div>

          {/* Description Text */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              召集所有创始人、联合创始人、CEO、CTO 和 AI 构建者！
              欢迎来到 <span className="text-purple-400 font-semibold">BuilderX AI 交流酒会</span>。
            </p>
            <p>
              本次活动由 BuilderX 主办，悉尼科技创新中心支持。我们要诚挚邀请在 AI 和 Agent 领域构建的伙伴加入我们！
            </p>
            <p>
              我们预计邀请 50 位精选构建者。为了确保高质量的社交，我们采用邀请制和审核制报名。这是一个轻松的聚会，体验前沿 AI 产品，结交新朋友。
            </p>
            <p>
              分享你的团队、公司、产品，或讨论你最关心的问题——用户增长、出海、AI 商业化和品牌影响力。
            </p>
            <p className="font-semibold text-white">欢迎加入我们！</p>
          </div>

          {/* Agenda Section */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-white">活动流程:</h3>
              <div className="h-1 flex-grow bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
            </div>

            <div className="space-y-3">
              {[
                "BuilderX CEO 致辞与愿景",
                "特邀嘉宾：Agent 的未来",
                "圆桌讨论：2024 AI 趋势",
                "自由交流 & 酒水"
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
          <div className="mt-12 space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-4 text-gray-200">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="font-mono">2024年3月15日 · 18:30</span>
            </div>
            <div className="flex items-start gap-4 text-gray-200">
              <MapPin className="w-5 h-5 text-purple-400 mt-1" />
              <span>悉尼 CBD 科技中心 (地址审核通过后发送)</span>
            </div>
          </div>

          {/* QR Code / Registration Area */}
          <div className="mt-12 flex flex-col items-center justify-center space-y-4">
            <div className="p-1 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500">
              <div className="bg-white p-2 rounded-lg">
                {/* Placeholder QR Code */}
                <div className="w-32 h-32 bg-black flex items-center justify-center">
                   <div className="grid grid-cols-5 gap-1 p-2">
                      {[...Array(25)].map((_, i) => (
                        <div key={i} className={`w-full h-full ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`} />
                      ))}
                   </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">扫码报名</p>
            
            <Button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              立即报名
            </Button>
          </div>

          {/* Footer Info Box */}
          <div className="mt-16 p-6 border border-purple-500/30 bg-purple-900/20 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">BuilderX</strong> 是澳洲首屈一指的 AI 社区。我们即将推出的 <strong className="text-white">Creator Studio</strong> 将是该地区首个 AI 发现平台，帮助创作者从“几行代码”走向“商业化”。
            </p>
          </div>

          {/* Partner Logos Area */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-70">
            <div className="text-sm font-semibold tracking-wider uppercase">
              悉尼创新中心
            </div>
            <div className="h-4 w-px bg-white/30 hidden md:block" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-red-500" />
              <span className="font-bold text-lg">BuilderX</span>
            </div>
          </div>

        </div>
      </main>

      <MadeWithDyad />
    </div>
  );
}