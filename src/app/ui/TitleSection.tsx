import React from 'react';

interface TitleSectionProps {
  content: string;
}

export default function TitleSection({content}: TitleSectionProps) {
  return (
    <h2 className="text-2xl text-mocha-purple-light">{content}</h2>
  )
}
