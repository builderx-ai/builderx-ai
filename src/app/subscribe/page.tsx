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
  const [errorMsg, setErrorMsg] = useState('');

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
        return;
      }
      setErrorMsg(
        res.status === 400
          ? '邮箱格式不正确，请检查后重新提交。'
          : res.status === 503
            ? '订阅服务暂时不可用，请稍后再试。'
            : '订阅没有成功，请稍后再试。如果一直失败，可以发邮件到 hello@builderxai.dev。'
      );
      setStatus('error');
    } catch (err) {
      setErrorMsg('网络连接失败，请检查网络后重试。');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-black">
        <Card className="max-w-md w-full border-zinc-800 bg-zinc-900/50 text-white text-center py-8">
          <CardContent className="space-y-4">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
            <CardTitle className="text-2xl font-bold">订阅成功</CardTitle>
            <CardDescription className="text-zinc-400">
              欢迎邮件已发到 {email}。如果几分钟内没收到，请看一下垃圾邮件文件夹。
            </CardDescription>
            <Link href="/" className="inline-block mt-4">
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">回到首页</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center p-6 bg-black">
      <Card className="max-w-md w-full border-zinc-800 bg-zinc-900/50 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">订阅活动通知</CardTitle>
          <CardDescription className="text-zinc-400">
            留下邮箱，第一时间收到 BuilderX AI 的线下活动、分享会和项目更新。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="name@example.com"
              className="bg-zinc-950 border-zinc-800 focus:ring-yellow-500"
              value={email}
              aria-label="邮箱地址"
              onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
              required
            />
            <Button 
              type="submit" 
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? '提交中…' : '订阅'}
            </Button>
            {status === 'error' && (
              <p role="alert" className="text-red-500 text-sm">{errorMsg}</p>
            )}
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
