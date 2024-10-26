import type { Props as ExperienceProp } from '../components/experience/props'

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: 'June 2019 — March 2020',
    title: 'FullStack Developer',
    company: 'ekino',
    companyUrl: 'https://ekino.com/',
    description:
      'I spearheaded the development of a cutting-edge token trading platform on the Solana network, utilizing Next.js as the foundation for the project. To facilitate real-time communication and API interactions, I integrated Relay, ensuring seamless and instant data flow across the platform. Additionally, I developed a chat application leveraging Shadcn for its framework, managing real-time communication effectively through GraphQL subscriptions. To construct a robust and scalable GraphQL schema, I utilized Pothos, a GraphQL schema builder in TypeScript, and enhanced its functionality with the integration of the Prisma and Relay plugins. This approach allowed me to navigate and resolve the challenges associated with complex types that initially impacted performance, ultimately delivering a high-performing, real-time token trading platform.',
    technologies: [
      'Next.js',
      'GraphQL',
      'Relay',
      'Node.js',
      'Pothos',
      'Shadcn',
      'Tailwind CSS',
    ],
    logo: '/logos/ekino.png',
  },
  {
    dates: 'April 2020 — January 2021',
    title: 'Mobile developer',
    company: 'Pentalog',
    companyUrl: 'https://Pentalog/',
    description:
      'Developed mobile application titled "Chop" which aimed to `A restaurant table booking app developed to streamline the dining experience using react-native.And developed enabling easy table reservations, menu previews, and personalized dining recommendations using flutter.`. This project was executed using React Native for efficient cross-platform functionality, ensuring a seamless user experience across both Android and iOS devices. Additionally, Flutter was utilized for specific modules requiring intricate UI designs, taking advantage of its rich widget library and fast rendering to enhance the app’s visual appeal and performance.',
    technologies: ['JavaScript', 'Dart', 'React Native', 'Flutter', 'Redux'],
    logo: '/logos/paracon.png',
  },
  {
    dates: 'February 2021 — December 2022',
    title: 'Senior Front-end Developer',
    company: 'Zenika',
    companyUrl: 'https://Zenika/',
    description:
      'I contributed to the development of the X-Caliber Real Estate Company website, leveraging React for its dynamic user interface and Tailwind CSS for custom, responsive design. This combination allowed for a highly interactive and aesthetically pleasing online presence, tailored specifically to the real estate sectors needs, ensuring a seamless and engaging user experience.',
    technologies: ['React', 'Figma', 'Tailwind CSS'],
    logo: '/logos/zenika.png',
  },
  {
    dates: 'January 2023 — March 2024',
    title: 'Senior Full-stack Developer',
    company: 'BAM',
    companyUrl: 'https://BAM.com',
    description:
      'I took the initiative to update outdated packages, effectively mitigating security risks and aligning the application with current industry standards to safeguard user information. Collaborating closely with both QA and product teams, I played a pivotal role in identifying and prioritizing bug fixes, streamlining the resolution process to enhance application performance. Throughout the package upgrade process, I proactively detected and addressed potential problems, averting potential future issues and ensuring ongoing application stability. Moreover, I was responsible for the meticulous integration of pixel-perfect designs from Figma, guaranteeing the exact replication of UI elements and ensuring a seamless transition between the design and development stages, ultimately delivering a refined and cohesive user experience.',
    technologies: ['React', 'Redux', 'Material UI', 'Figma', 'API Integration'],
    logo: '/logos/BAM.png',
  },
]
