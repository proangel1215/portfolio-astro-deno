import type { Props as ExperienceProp } from '../components/experience/props'

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: 'February 2015 — March 2017',
    title: 'FullStack Developer',
    company: 'Titan Technology Corporation',
    companyUrl: 'https://www.titancorpvn.com/',
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
    logo: '/logos/titan.png',
  },
  {
    dates: 'May 2017 — October 2018',
    title: 'Mobile developer',
    company: 'Savvycom Software',
    companyUrl: 'https://savvycom.vn/',
    description:
      'Developed mobile application titled "Chop" which aimed to `A restaurant table booking app developed to streamline the dining experience using react-native.And developed enabling easy table reservations, menu previews, and personalized dining recommendations using flutter.`. This project was executed using React Native for efficient cross-platform functionality, ensuring a seamless user experience across both Android and iOS devices. Additionally, Flutter was utilized for specific modules requiring intricate UI designs, taking advantage of its rich widget library and fast rendering to enhance the app’s visual appeal and performance.',
    technologies: ['JavaScript', 'Dart', 'React Native', 'Flutter', 'Redux'],
    logo: '/logos/savy.png',
  },
  {
    dates: 'February 2021 — December 2022',
    title: 'Senior Front-end Developer',
    company: 'Axon Active',
    companyUrl: 'https://www.axonactive.com/',
    description:
      'I contributed to the development of the X-Caliber Real Estate Company website, leveraging React for its dynamic user interface and Tailwind CSS for custom, responsive design. This combination allowed for a highly interactive and aesthetically pleasing online presence, tailored specifically to the real estate sectors needs, ensuring a seamless and engaging user experience.',
    technologies: ['React', 'Figma', 'Tailwind CSS'],
    logo: '/logos/axon.png',
  },
]
