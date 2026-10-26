import Link from 'next/link';

const SiteFooter = () => (
  <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-sm text-gray-400">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
      <p>© 2026 BuilderX AI · Sydney, Australia</p>
      <nav aria-label="页脚" className="flex items-center gap-6">
        <Link href="/" className="transition-colors duration-300 hover:text-white">首页</Link>
        <Link href="/subscribe" className="transition-colors duration-300 hover:text-white">订阅</Link>
        <a href="mailto:hello@builderxai.dev" className="transition-colors duration-300 hover:text-white">联系我们</a>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
