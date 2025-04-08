import React, { ReactNode } from 'react';

interface BrandProps {
  href: string;
  content: ReactNode;
}

export default function Brand({ href, content }: BrandProps) {
  return (
    <a
      className="text-mocha-purple-dark hover:text-mocha-purple-light"
      href={href}
    >
      {content}
    </a>
  );
}
