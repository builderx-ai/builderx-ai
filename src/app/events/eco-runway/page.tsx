import React from 'react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';

// Director's preview for BuilderX AI event #3 (AI Eco-Fashion Runway).
// Not linked from anywhere yet and noindex. All content lives in the arrays below:
// update a role's `status` or a segment's `cues` and the page follows.

export const metadata = {
  title: 'AI Eco-Fashion Runway · 活动导演预览',
  description: 'BuilderX AI 第三次线下活动：AI 设计、小朋友动手、模特走秀。从开场到颁奖，每一段谁在做什么，哪些角色还空缺。',
  robots: { index: false, follow: false },
};

type Status = 'filled' | 'confirmed' | 'vacant' | 'open';

interface Role {
  id: string;
  name: string;
  group: '参与者' | '组委会' | '特邀与合作';
  count: string;
  status: Status;
  who?: string;
  does: string;
  fit: string;
}

const ROLES: Role[] = [
  // 组委会
  { id: 'director', name: '总控 / 策划', group: '组委会', count: '1', status: 'filled', who: 'Cheney', does: '进度、场地、预算、招募、对外联络', fit: '' },
  { id: 'mc', name: '主持人 MC', group: '组委会', count: '1', status: 'vacant', does: '破冰开场、串场倒计时、走秀解说、组织打分、颁奖', fit: '幽默、控场稳、敢接梗' },
  { id: 'av', name: '音视控台 AV', group: '组委会', count: '1', status: 'vacant', does: '大屏投影，每队走秀时切换该队的 AI 视频和音乐', fit: '熟悉投影、音响和播放软件' },
  { id: 'reporter', name: '游走主播 / 摄影', group: '组委会', count: '1–2', status: 'vacant', does: '各桌探班采访、抓拍走秀、为长短视频攒素材', fit: '外向、会用手机或相机拍视频' },
  { id: 'safety', name: '物料与安全官', group: '组委会', count: '1', status: 'vacant', does: '采购地毯和儿童安全工具、布场、分发材料、盯安全', fit: '细心，有带小朋友的经验更好' },
  { id: 'checkin', name: '签到与报名协调', group: '组委会', count: '1', status: 'vacant', does: '管理报名表、当天签到、主持抽签分队', fit: '有条理、反应快' },
  // 参与者
  { id: 'ai', name: 'A · AI 创客', group: '参与者', count: '5–10', status: 'open', does: '30 分钟内用 AI 出设计图、儿童版制作指南、走秀音乐和背景视频', fit: '会用生图或生视频工具就行，不必是程序员。自带电脑，算力现场提供' },
  { id: 'kids', name: 'B · 小小创客', group: '参与者', count: '15–20', status: 'open', does: '照着 AI 指南，用纸箱、气泡膜、旧布把衣服做出来', fit: '小朋友加一位家长陪同。请带家里的干净废旧材料' },
  { id: 'model', name: 'C · 模特', group: '参与者', count: '4–5', status: 'vacant', does: '穿上本队成衣走地毯秀', fit: '不限身材、年龄、性别。敢上台、放得开就行' },
  { id: 'audience', name: '观众', group: '参与者', count: '不限', status: 'open', does: '围观、加油、参与打分', fit: '家人朋友和社区成员' },
  // 特邀与合作
  { id: 'judge', name: '特邀评委', group: '特邀与合作', count: '1–2', status: 'vacant', does: '走秀点评、参与评奖', fit: '时尚、设计或可持续方向的从业者或学生' },
  { id: 'compute', name: 'AI 算力伙伴', group: '特邀与合作', count: '1', status: 'confirmed', who: '已确认', does: '为全场提供模型和 token，派代表颁发 AI 奖', fit: '' },
  { id: 'venue', name: '场地', group: '特邀与合作', count: '1', status: 'vacant', does: '能放 4–5 张大桌、一条 8–10 米地毯、一块投影大屏', fit: '候选：Green Square、Ultimo' },
  { id: 'sponsor', name: '商家赞助', group: '特邀与合作', count: '若干', status: 'open', does: '提供物料、奖品、餐饮或现金支持，换取现场和视频曝光', fit: '悉尼本地商家' },
];

interface Segment {
  time: string;
  minutes: number;
  title: string;
  summary: string;
  cues: { role: string; action: string }[];
}

const RUN_OF_SHOW: Segment[] = [
  {
    time: '00:00', minutes: 20, title: '开场破冰 · 抽签组队',
    summary: '所有人到场，抽签分成 4–5 支战队，一队一张大桌，给战队起名。',
    cues: [
      { role: 'mc', action: '暖场、讲规则、主持抽签' },
      { role: 'checkin', action: '签到，按角色发抽签卡' },
      { role: 'safety', action: '每桌放好一套工具包' },
      { role: 'reporter', action: '拍到场和抽签的反应' },
    ],
  },
  {
    time: '00:20', minutes: 30, title: 'AI 设计',
    summary: 'A 组用 AI 出设计图、一份小朋友看得懂的材料清单和步骤，再生成本队的走秀音乐和背景视频。',
    cues: [
      { role: 'ai', action: '出设计图、儿童版制作指南、音乐、视频' },
      { role: 'kids', action: '和 A 组一起挑设计、看指南' },
      { role: 'compute', action: '现场算力支持' },
      { role: 'mc', action: '大屏倒计时，抽两桌讲讲创意' },
    ],
  },
  {
    time: '00:50', minutes: 60, title: '动手制衣',
    summary: '小朋友按指南用废旧材料把衣服做出来，这是全场最热闹的一个小时。',
    cues: [
      { role: 'kids', action: '裁、贴、拼，把衣服做出来' },
      { role: 'ai', action: '当"说明书"，答疑但不代做' },
      { role: 'reporter', action: '各桌探班采访，可投到大屏' },
      { role: 'safety', action: '巡场，盯剪刀胶水，补材料' },
      { role: 'av', action: '收齐各队视频和音乐，排好播放顺序' },
    ],
  },
  {
    time: '01:50', minutes: 15, title: '试穿 · 联调',
    summary: '模特上身，现场微调松紧，大屏和音乐过一遍。',
    cues: [
      { role: 'model', action: '试穿，走一遍位' },
      { role: 'av', action: '逐队试播视频和音乐' },
      { role: 'mc', action: '公布出场顺序' },
    ],
  },
  {
    time: '02:05', minutes: 35, title: '地毯走秀',
    summary: '每队模特登场，背后大屏同步播放这一队的 AI 视频，全场打分。',
    cues: [
      { role: 'model', action: '走秀' },
      { role: 'av', action: '每队切换专属视频和音乐' },
      { role: 'mc', action: '解说每套衣服的故事' },
      { role: 'judge', action: '点评、打分' },
      { role: 'audience', action: '欢呼、扫码投票' },
      { role: 'reporter', action: '正对地毯和大屏拍主机位' },
    ],
  },
  {
    time: '02:40', minutes: 20, title: '颁奖 · 大合照',
    summary: '颁发两座奖杯和趣味绶带，全员合影。',
    cues: [
      { role: 'mc', action: '主持颁奖' },
      { role: 'judge', action: '颁发 AI HUMAN IMPACT AWARD' },
      { role: 'compute', action: '颁发 AI INGENUITY AWARD' },
      { role: 'reporter', action: '拍大合照' },
      { role: 'safety', action: '组织收场' },
    ],
  },
];

const AWARDS = [
  { name: 'AI INGENUITY AWARD', color: 'text-sky-400 border-sky-500/40', judges: '评 AI 创意', detail: '设计图有多惊艳，指南能不能让小朋友真的做出来，音乐和视频配得怎么样。' },
  { name: 'AI HUMAN IMPACT AWARD', color: 'text-rose-400 border-rose-500/40', judges: '评实体成品', detail: '小朋友做出来的衣服、材料用得多巧、模特在地毯上的表现。' },
];

const PREP = [
  { week: 'W1', dates: '10.27 – 11.02', items: ['奖杯下单', '提交场地申请', '确认算力发放方式', '找到 MC 和 AV'] },
  { week: 'W2', dates: '11.03 – 11.09', items: ['锁定日期和场地', '开放报名', '发海报、联系高校社团', '开小红书和视频号'] },
  { week: 'W3', dates: '11.10 – 11.16', items: ['招满三组参与者和工作人员', '采购地毯和儿童工具', '评委确认'] },
  { week: 'W4', dates: '11.17 – 11.23', items: ['彩排', '大屏和音乐联调', '提醒报名者带材料'] },
  { week: '活动日', dates: '11 月底周末', items: ['现场执行', '全程拍摄'] },
  { week: '活动后', dates: '+1 周', items: ['回顾文章', '长视频和短视频发布'] },
];

const STATUS_LABEL: Record<Status, string> = {
  filled: '已到位',
  confirmed: '已确认',
  vacant: '空缺',
  open: '招募中',
};

const STATUS_CLASS: Record<Status, string> = {
  filled: 'border-white/15 bg-[#1F1F1F] text-gray-300',
  confirmed: 'border-white/15 bg-[#1F1F1F] text-gray-300',
  vacant: 'border-amber-400/70 border-dashed bg-amber-400/10 text-amber-300',
  open: 'border-emerald-400/50 bg-emerald-400/10 text-emerald-300',
};

const roleById = (id: string) => ROLES.find((r) => r.id === id)!;

function StatusPill({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${STATUS_CLASS[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-xs uppercase tracking-widest text-gray-500">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-white" style={{ textWrap: 'balance' }}>{title}</h2>
      {desc && <p className="mt-3 max-w-2xl text-base text-gray-400" style={{ textWrap: 'pretty' }}>{desc}</p>}
    </div>
  );
}

export default function EcoRunwayPreviewPage() {
  const vacant = ROLES.filter((r) => r.status === 'vacant');
  const groups: Role['group'][] = ['组委会', '参与者', '特邀与合作'];
  const totalMinutes = RUN_OF_SHOW.reduce((s, x) => s + x.minutes, 0);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-grow px-4 pt-28 pb-16">
        <div className="mx-auto max-w-5xl">
          {/* Hero */}
          <header className="pb-16 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-white px-2 py-1 text-xs font-bold uppercase tracking-wider text-black">导演预览</span>
              <span className="font-mono text-sm text-gray-400">BuilderX AI 第三次线下活动</span>
            </div>
            <h1
              className="mt-6 max-w-[680px] text-5xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9B9B9B]"
              style={{ textWrap: 'balance' }}
            >
              AI Eco-Fashion Runway
            </h1>
            <p className="mt-6 max-w-[680px] text-lg text-gray-300" style={{ textWrap: 'pretty' }}>
              大人用 AI 设计衣服，小朋友用纸箱和气泡膜把它做出来，模特穿上走地毯秀，背后大屏播放这一队用 AI 做的视频和音乐。
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ['时间', '11 月底 · 周末'],
                ['地点', '悉尼 · 场地待定'],
                ['规模', '35–45 人 · 4–5 队'],
                ['时长', `约 ${Math.round(totalMinutes / 60 * 10) / 10} 小时`],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-white/10 bg-[#181818] p-4">
                  <dt className="text-xs text-gray-500">{k}</dt>
                  <dd className="mt-1 text-base font-semibold text-white">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-gray-400">
              目前还有 <span className="font-semibold text-amber-300">{vacant.length} 个角色空缺</span>，页面里标黄虚线的都是。
            </p>
          </header>

          {/* Teams */}
          <section className="py-16 border-b border-white/10">
            <SectionTitle eyebrow="01 · 一支战队" title="每队三组人，现场抽签组合" desc="三组人彼此不认识也没关系，抽到同一桌就是队友。" />
            <div className="grid gap-4 md:grid-cols-3">
              {(['ai', 'kids', 'model'] as const).map((id) => {
                const r = roleById(id);
                return (
                  <div key={id} className="rounded-2xl border border-white/10 bg-[#181818] p-6">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold">{r.name}</h3>
                      <span className="font-mono text-sm text-gray-500">每队 {id === 'ai' ? '1–2' : id === 'kids' ? '3–4' : '1'} 人</span>
                    </div>
                    <p className="mt-4 text-sm text-gray-300" style={{ textWrap: 'pretty' }}>{r.does}</p>
                    <p className="mt-3 text-sm text-gray-500" style={{ textWrap: 'pretty' }}>{r.fit}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Run of show */}
          <section className="py-16 border-b border-white/10">
            <SectionTitle eyebrow="02 · 现场流程" title="从开场到颁奖，每一段谁在做什么" desc="时间从入场开始算。标黄的角色还没有人，认领后就会变成名字。" />
            <ol className="relative space-y-6 border-l border-white/10 pl-6 md:pl-8">
              {RUN_OF_SHOW.map((seg, i) => (
                <li key={seg.time} className="relative">
                  <span className="absolute -left-[31px] md:-left-[39px] top-6 h-3 w-3 rounded-full bg-white" aria-hidden />
                  <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-sm text-gray-500">第 {i + 1} 幕 · {seg.time}</span>
                      <h3 className="text-xl font-bold">{seg.title}</h3>
                      <span className="font-mono text-sm text-gray-500">{seg.minutes} 分钟</span>
                    </div>
                    <p className="mt-3 text-base text-gray-300" style={{ textWrap: 'pretty' }}>{seg.summary}</p>
                    <ul className="mt-5 grid gap-2 md:grid-cols-2">
                      {seg.cues.map((c) => {
                        const r = roleById(c.role);
                        const isVacant = r.status === 'vacant';
                        return (
                          <li
                            key={c.role}
                            className={`flex items-start gap-3 rounded-lg border px-3 py-2 ${isVacant ? 'border-dashed border-amber-400/60 bg-amber-400/5' : 'border-white/10 bg-[#1F1F1F]'}`}
                          >
                            <span className={`shrink-0 text-sm font-semibold ${isVacant ? 'text-amber-300' : 'text-white'}`}>
                              {r.name}
                              {r.who && r.status !== 'confirmed' ? `（${r.who}）` : ''}
                              {isVacant ? ' · 空缺' : ''}
                            </span>
                            <span className="text-sm text-gray-400">{c.action}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Stage */}
          <section className="py-16 border-b border-white/10">
            <SectionTitle eyebrow="03 · 场地布局" title="一条地毯，一块大屏，几张大桌" />
            <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
              <div className="mx-auto max-w-md space-y-3 text-center text-sm">
                <div className="rounded-lg border border-white/20 bg-[#272727] py-3 font-semibold">投影大屏 · 播放各队 AI 视频</div>
                <div className="flex items-stretch gap-3">
                  <div className="flex-1 rounded-lg border border-white/10 bg-[#1F1F1F] py-6 text-gray-400">战队大桌<br />× 2–3</div>
                  <div className="w-16 rounded-lg border border-rose-500/40 bg-rose-500/10 py-6 text-rose-300">走秀<br />地毯<br />8–10m</div>
                  <div className="flex-1 rounded-lg border border-white/10 bg-[#1F1F1F] py-6 text-gray-400">战队大桌<br />× 2–3</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-[#1F1F1F] py-3 text-gray-400">观众席 · 围在地毯两侧和后方</div>
              </div>
              <p className="mt-6 text-center text-sm text-gray-500">主机位正对地毯和大屏，一张照片里同时拍到成衣和这一队的 AI 设计。</p>
            </div>
          </section>

          {/* Awards */}
          <section className="py-16 border-b border-white/10">
            <SectionTitle eyebrow="04 · 奖项" title="两座原木奖杯，一虚一实" desc="另有趣味绶带，送给表现突出的小朋友和模特。" />
            <div className="grid gap-4 md:grid-cols-2">
              {AWARDS.map((a) => (
                <div key={a.name} className={`rounded-2xl border bg-[#181818] p-6 ${a.color.split(' ')[1]}`}>
                  <p className={`font-mono text-lg font-bold tracking-wide ${a.color.split(' ')[0]}`}>{a.name}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{a.judges}</p>
                  <p className="mt-2 text-sm text-gray-400" style={{ textWrap: 'pretty' }}>{a.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cast */}
          <section className="py-16 border-b border-white/10">
            <SectionTitle eyebrow="05 · 角色表" title="谁已经在，谁还缺" desc="想认领哪个角色，在 Discord 活动频道说一声，或者发邮件给我们。" />
            <div className="space-y-10">
              {groups.map((g) => (
                <div key={g}>
                  <h3 className="mb-4 text-lg font-semibold text-gray-300">{g}</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {ROLES.filter((r) => r.group === g).map((r) => (
                      <div
                        key={r.id}
                        className={`rounded-xl border p-5 ${r.status === 'vacant' ? 'border-dashed border-amber-400/60 bg-amber-400/5' : 'border-white/10 bg-[#181818]'}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <h4 className="text-base font-bold">{r.name}</h4>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-gray-500">{r.count} 人</span>
                            <StatusPill status={r.status} />
                          </div>
                        </div>
                        {r.who && r.status === 'filled' && <p className="mt-1 text-sm text-gray-400">{r.who}</p>}
                        <p className="mt-3 text-sm text-gray-300" style={{ textWrap: 'pretty' }}>{r.does}</p>
                        {r.fit && <p className="mt-2 text-sm text-gray-500" style={{ textWrap: 'pretty' }}>适合：{r.fit}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prep timeline */}
          <section className="py-16 border-b border-white/10">
            <SectionTitle eyebrow="06 · 筹备进度" title="倒排时间线" />
            <div className="grid gap-3 md:grid-cols-3">
              {PREP.map((p) => (
                <div key={p.week} className="rounded-xl border border-white/10 bg-[#181818] p-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-bold">{p.week}</span>
                    <span className="font-mono text-xs text-gray-500">{p.dates}</span>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-gray-400">
                    {p.items.map((it) => <li key={it}>· {it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="pt-16 text-center">
            <h2 className="text-3xl font-bold" style={{ textWrap: 'balance' }}>想来帮忙，或者想上台？</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-400" style={{ textWrap: 'pretty' }}>
              告诉我们你想认领的角色。主持、控台、拍摄、模特、评委，哪一个都行。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@builderxai.dev?subject=认领角色：AI Eco-Fashion Runway"
                className="rounded-md bg-white px-3 py-2 text-base font-semibold text-black transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                发邮件认领角色
              </a>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
