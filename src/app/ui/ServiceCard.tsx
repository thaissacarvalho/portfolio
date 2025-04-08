import React, { ElementType } from 'react';

interface ServiceCardProps {
  contentI: ElementType;
  contentT: string;
  contentP: string;
}

export default function ServiceCard({contentI: Icon, contentT, contentP}: ServiceCardProps) {
  return (
    <div className="flex flex-col">
      <Icon className="text-mocha-purple-dark mb-4 h-10 w-10"/>
      <h3 className="text-xl font-bold mb-2">{contentT}</h3>
      <p className="text-mocha-gray">{contentP}</p>
    </div>
  );
}
