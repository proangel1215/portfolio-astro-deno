import type { Props as ExperienceProp } from '../components/experience/props';

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: 'March 2024 — June 2024',
    title: 'Web3 Developer',
    company: 'Resistance Girl (Freelance)',
    companyUrl: 'https://t.me/ResGirl_bot',
    description:
      'Designed and architected tonotc.app, utilizing technologies such as Next.js, Tact, Prisma and Tailwind. Worked on building telegram mini-app UI, TON smart contract and integrating into telegram bot.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Tact',
      'TON',
      'Telegram Mini-App',
      'Telegram Bot',
      'Node.js',
      'Prisma',
    ],
    logo: '/logos/resistance-girl.jpg',
  },
  {
    dates: 'June 2022 — November 2023',
    title: 'Senior Full-stack Developer',
    company: 'X-Team (Remote)',
    companyUrl: 'https://x-team.com/',
    description:
      'Developed token trading platfrom on Solana network, project based on Next.js, integrated Relay for realtime communication and api. Built chat app with Shadcn and handled realtime communication with Graphql subscription. Used Pothos graphql schema builder in typescript, integrated the Prisma plugin and Relay plugin, overcame the obstacles that complex types slowed down the performance',
    technologies: [
      'Next.js',
      'GraphQL',
      'Relay',
      'Node.js',
      'Pothos',
      'Shadcn',
      'Tailwind CSS',
    ],
    logo: '/logos/x-team.webp',
  },
  {
    dates: 'October 2021 — April 2022',
    title: 'Full-stack Developer',
    company: 'Paracon Consultants Corp',
    companyUrl: 'https://www.absoluteweb.com',
    description:
      'Upgraded outdated packages to address security vulnerabilities, ensuring the application met industry standards and protected user data. Worked closely with QA and product teams to prioritize and resolve bugs efficiently. Identified and resolved potential issues proactively during package upgrades, preventing future bugs and maintaining application stability. Integrated pixel-perfect designs from Figma, ensuring precise implementation of UI elements and maintaining consistency between design and development phases for a polished user experience.',
    technologies: ['React', 'Redux', 'Material UI', 'Figma', 'API Integration'],
    logo: '/logos/paracon.png',
  },
  {
    dates: 'June 2020 — October 2021',
    title: 'Front-end Developer',
    company: 'Paracon Consultants Corp',
    companyUrl: 'https://paracon.ca/',
    description:
      'Created a e-commerce site for dropshippers using React, Redux and MUI. Developed a admin panel for CEO to manage and control various aspects of the system, including user, subscription and notification management, data analysis and health check',
    technologies: ['React', 'Redux', 'Material UI'],
    logo: '/logos/paracon.png',
  },
  {
    dates: 'July 2019 — June 2020',
    title: 'Front-end Developer Intern',
    company: 'Paracon Consultants Corp',
    companyUrl: 'https://paracon.ca/',
    description:
      'Worked on developing a X-Caliber Real Estate Company website using React and Tailwind CSS.',
    technologies: ['React', 'Figma', 'Tailwind CSS'],
    logo: '/logos/paracon.png',
  },
];
