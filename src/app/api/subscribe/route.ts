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
      headers: {
        'List-Unsubscribe': `<mailto:hello@builderxai.dev?subject=unsubscribe from ${email}>`,
      },
      html: `
        <div style="font-family: 'Inter', sans-serif; background-color: #050505; color: #ffffff; padding: 40px; max-width: 600px; margin: auto; border: 1px solid #1a1a1a; border-radius: 12px;">
          <div style="background: linear-gradient(to right, #4f46e5, #9333ea); height: 4px; border-radius: 4px 4px 0 0; margin: -40px -40px 40px -40px;"></div>
          <h1 style="color: #fbbf24; font-size: 28px; font-weight: 800; letter-spacing: -0.05em; margin-bottom: 24px;">BuilderX AI</h1>
          <p style="font-size: 18px; line-height: 1.6; color: #e4e4e7;">Welcome to the Club! 🚀</p>
          <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa;">Hi there,</p>
          <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa;">Thanks for joining <strong>BuilderX AI</strong>. You're now connected with Sydney's premier community for AI-driven development.</p>
          <div style="background: rgba(79, 70, 229, 0.1); border-left: 4px solid #6366f1; padding: 20px; margin: 30px 0;">
            <p style="margin: 0; color: #e4e4e7; font-size: 15px; font-style: italic;">"Exploring the future of coding, powered by AI and community collaboration."</p>
          </div>
          <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa;">We'll keep you updated on our upcoming Meetups, open-source projects, and technical insights.</p>
          <hr style="margin: 40px 0; border: none; border-top: 1px solid #27272a;" />
          <p style="font-size: 12px; color: #71717a; text-align: center;">
            You received this because you subscribed on <a href="https://builderxai.dev" style="color: #6366f1; text-decoration: none;">builderxai.dev</a>.
          </p>
          <p style="font-size: 11px; color: #52525b; text-align: center; margin-top: 10px;">
            To stop receiving these, please <a href="mailto:hello@builderxai.dev?subject=Unsubscribe" style="color: #71717a; text-decoration: underline;">reply to this email</a> with "Unsubscribe".
          </p>
          <p style="font-size: 12px; color: #52525b; text-align: center; margin-top: 20px;">© 2026 BuilderX AI. Sydney, Australia.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: error.message || 'Subscription failed' }, { status: 500 });
  }
}
