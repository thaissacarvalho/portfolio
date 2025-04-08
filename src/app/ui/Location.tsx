import React, { ReactNode } from 'react';
import { FaMapPin } from 'react-icons/fa';

interface LocationProps {
  content: ReactNode;
}

export default function Location({content}: LocationProps) {
  return (
    <div className='flex items-center text-gray-400'>
      <FaMapPin size={16} className="mr-2 text-red-500" />
      <span>{content}</span>
    </div>
  );
}
