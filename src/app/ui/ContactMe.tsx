import React, { ReactNode } from 'react';
import SocialLink from './SocialLink';

interface ContactMeProps {
  content: ReactNode;
}

export default function ContactMe({ content }: ContactMeProps) {
  return (
    <div>
      <h3 className="text-white text-xl mb-4">{content}</h3>
      
      <SocialLink/>
      <p className="text-[#D9D9D9]">thaissa.dos2003@outlook.com</p>
    </div>
  );
}
