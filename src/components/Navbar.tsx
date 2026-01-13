import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-16 border-b border-white/10 bg-black/20 backdrop-blur-md fixed top-0 left-0 z-50">
      {/* Blank Navigation Bar as requested */}
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="text-xl font-bold tracking-tighter opacity-0">Logo</div>
      </div>
    </nav>
  );
};

export default Navbar;