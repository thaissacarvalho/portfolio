import {
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSwagger,
  SiDocker,
  SiJest,
  SiRedis,
  SiNestjs,
  SiNginx,
  SiPm2,
} from 'react-icons/si';
import { LiaAws } from 'react-icons/lia';

export const skillsData = [
  {
    icon: <SiTypescript size={40} className="text-blue-500" />,
    name: 'TypeScript',
  },
  {
    icon: <SiJavascript size={40} className="text-yellow-400" />,
    name: 'JavaScript',
  },
  {
    icon: <SiNodedotjs size={40} className="text-green-500" />,
    name: 'Node.js',
  },
  {
    icon: <SiExpress size={40} className="text-mocha-black" />,
    name: 'Express',
  },
  { icon: <SiNestjs size={40} className="text-red-600" />, name: 'NestJS' },
  { icon: <SiPostgresql size={40} className="text-blue-200" />, name: 'PostgreSQL' },
  { icon: <SiMysql size={40} className="text-blue-400" />, name: 'MySQL' },
  {
    icon: <SiMongodb size={40} className="text-green-600" />,
    name: 'MongoDB',
  },
  { icon: <SiDocker size={40} className="text-blue-600" />, name: 'Docker' },
  { icon: <LiaAws size={40} className="text-yellow-500" />, name: 'AWS' },
  { icon: <SiRedis size={40} className="text-red-500" />, name: 'Redis' },
  {
    icon: <SiSwagger size={40} className="text-green-400" />,
    name: 'Swagger',
  },
  { icon: <SiJest size={40} className="text-orange-500" />, name: 'Jest' },
  { icon: <SiNginx size={40} className="text-green-800" />, name: 'NGINX' },
  { icon: <SiPm2 size={40} className="text-purple-500" />, name: 'PM2' },
];
