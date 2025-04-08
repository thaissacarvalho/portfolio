import React from 'react';

interface ContentExperienceProps {
  contentT: string;
  contentP: string;
}

export default function ContentExperience({contentT, contentP}: ContentExperienceProps) {
  return (
    <div className="md:first:w-[140px] md:w-[300px] flex items-center justify-center gap-1">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">{contentT}</h2>
      <p className="text-sm md:text-base">{contentP}</p>
    </div>
  )
}
