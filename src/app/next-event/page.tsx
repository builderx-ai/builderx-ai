import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function NextEventPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Navbar />

      {/* Background Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4 py-12">
        <div className="max-w-4xl w-full space-y-12">
          
          {/* Header Section */}
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              Upcoming Meetup
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              BuilderX AI: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Launch Event</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for an evening of networking, demos, and insights into the future of AI development in Australia.
            </p>
          </div>

          {/* Event Details Card */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Date</h3>
              <p className="text-gray-400">March 15, 2024</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Time</h3>
              <p className="text-gray-400">6:00 PM - 9:00 PM</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
              <p className="text-gray-400">Tech Hub, Sydney</p>
            </div>
          </div>

          {/* Agenda / Content Placeholder */}
          <div className="bg-black/20 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">What to Expect</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-cyan-500 mr-4 shrink-0" />
                <span className="text-gray-300">Keynote: The State of AI in 2024</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-purple-500 mr-4 shrink-0" />
                <span className="text-gray-300">Builder Showcases: 3 Demos from local startups</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-500 mr-4 shrink-0" />
                <span className="text-gray-300">Networking & Drinks</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-gray-200 transition-all">
              Register Now
            </Button>
            <Link href="/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white/10 transition-all">
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