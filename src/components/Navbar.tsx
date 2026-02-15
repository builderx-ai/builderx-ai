import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="w-full h-16 border-b border-white/10 bg-black/20 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80">
          BuilderX AI
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/subscribe">
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-xs h-8">
              Subscribe
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;