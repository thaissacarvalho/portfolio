import React, { MouseEventHandler, ReactNode } from 'react';

interface ButtonMenuProps {
  onClick: MouseEventHandler;
  content: ReactNode;
}

export default function ButtonMenu({onClick, content}: ButtonMenuProps) {
  return (
    <button className="md:hidden" onClick={onClick}>
      {content}
    </button>
  );
}
