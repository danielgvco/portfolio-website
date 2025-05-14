'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

export function Navbar() {
  return (
    <header className="absolute top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex mx-auto h-14 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-lg font-bold text-white">
          DANIEL VARGAS
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/projects" className="text-sm text-white">PROJECTS</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about" className="text-sm text-white">ABOUT ME</Link>
          </Button>

          <Button variant="ghost" className="text-white hover:text-gray-300" asChild>
            <Link href="https://www.linkedin.com/in/danielvco/" target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /></Link>
          </Button>

          <Button className="bg-white text-black hover:bg-gray-200" asChild>
            <Link href="/contact">CONTACT ME</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
