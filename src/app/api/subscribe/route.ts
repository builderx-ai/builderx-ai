import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = '3f171c68-9132-4322-9fb8-0f2000d70e51';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // 1. 添加到 Resend Audience
    await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    });

    // 2. 发送欢迎/确认邮件 (Best Practice)
    await resend.emails.send({
      from: 'BuilderX AI <hello@builderxai.dev>',
      to: email,
      subject: 'Welcome to BuilderX AI Community! 🚀',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #000;">Welcome to the Club! 🚀</h2>
          <p>Hi there,</p>
          <p>Thanks for subscribing to <strong>BuilderX AI</strong>. You are now part of Sydney's most exciting AI developer community.</p>
          <p>We'll keep you posted on our latest events, open-source projects, and AI engineering insights.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">
            If you didn't mean to subscribe, you can <a href="{{unsubscribe_url}}">unsubscribe here</a> at any time.
          </p>
          <p style="font-size: 12px; color: #666;">© 2026 BuilderX AI. Sydney, Australia.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: error.message || 'Subscription failed' }, { status: 500 });
  }
}
