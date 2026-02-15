'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from 'next/link';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-black">
        <Card className="max-w-md w-full border-zinc-800 bg-zinc-900/50 text-white text-center py-8">
          <CardContent className="space-y-4">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
            <CardTitle className="text-2xl font-bold">You're in!</CardTitle>
            <CardDescription className="text-zinc-400">
              Check your inbox for a welcome email. We're excited to have you!
            </CardDescription>
            <Link href="/" className="inline-block mt-4">
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">Back to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black">
      <Card className="max-w-md w-full border-zinc-800 bg-zinc-900/50 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Subscribe</CardTitle>
          <CardDescription className="text-zinc-400">
            Join BuilderX AI and get the latest updates on events and projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="name@example.com"
              className="bg-zinc-950 border-zinc-800 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </Button>
            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
