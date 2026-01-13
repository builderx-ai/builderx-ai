import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { MadeWithDyad } from '@/components/made-with-dyad';

export default function ReadMorePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Navbar />

      {/* Background Gradients/Blobs - Slightly shifted for variety if desired, but keeping same for now */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 text-center">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
            Deep Dive
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            You have navigated to the inner page. This layout mirrors the landing page to maintain visual consistency across the application.
          </p>

          <div className="pt-4">
            <Link href="/">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white/10 transition-all">
                Back Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <MadeWithDyad />
    </div>
  );
}