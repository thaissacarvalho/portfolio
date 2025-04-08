import React, { MouseEventHandler, ReactNode } from 'react';

interface ButtonLSwitcherProps {
  onClick: MouseEventHandler;
  content: ReactNode;
}

export default function ButtonLSwitcher({
  onClick,
  content,
}: ButtonLSwitcherProps) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border border-[#7900FF] text-mocha-purple-dark px-2 py-1 rounded hover:bg-[#7900FF] hover:text-white transition-colors"
    >
      {content}
    </button>
  );
}
