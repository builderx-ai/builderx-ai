import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = { title: "页面不存在" };

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main id="main-content" className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <p className="font-mono text-sm text-gray-400">404</p>
        <h1 className="mt-3 text-3xl font-bold" style={{ textWrap: "balance" }}>
          这个页面不存在
        </h1>
        <p className="mt-4 max-w-md text-base text-gray-400" style={{ textWrap: "pretty" }}>
          链接可能已过期，或者活动页已经下线。回到首页可以看到全部活动。
        </p>
        <Link
          href="/"
          className="mt-8 rounded-md bg-white px-3 py-2 text-base font-semibold text-black transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          回到首页
        </Link>
      </main>
    </div>
  );
}
