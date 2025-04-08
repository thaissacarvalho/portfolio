import React, { ReactNode } from 'react';

interface CopyRightProps {
  content: ReactNode;
}

export default function CopyRight({content}: CopyRightProps) {
  return (
    <div className="border-t border-gray-800 pt-6 text-center">
      <p className="text-gray-400">{content}</p>
    </div>
  );
}
