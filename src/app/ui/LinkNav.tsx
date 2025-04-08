import Link from 'next/link';
import React, { MouseEventHandler } from 'react';

interface LinkNavProps {
  href: string;
  content: string;
  onClick?: MouseEventHandler;
}

export default function LinkNav({ href, content, onClick }: LinkNavProps) {
  return (
    <Link
      href={href}
      className="hover:text-mocha-purple-light transition-colors"
      onClick={onClick}
    >
      {content}
    </Link>
  );
}
