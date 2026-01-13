import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import FlowingLinesBackground from '@/components/FlowingLinesBackground';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <Navbar />

      {/* New Canvas Background */}
      <FlowingLinesBackground />

      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 text-center">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
            BuilderX AI
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Australia Top AI community that connects builders and founders.
          </p>

          <div className="pt-4">
            <Link href="/next-event">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border-none">
                Next Event
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <MadeWithDyad />
    </div>
  );
}