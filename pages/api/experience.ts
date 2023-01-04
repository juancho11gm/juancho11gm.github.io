export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'HugeInc',
      type: 'Full-time - Remote',
      startDate: 'Aug/2020',
      iconUrl: '/assets/logos/huge.jpg',
      href: 'https://www.hugeinc.com',
      projects: [
        {
          name: 'Stellantis 🏎',
          role: 'Web Engineer',
          description:
            `Business and technical development of advertising units for the major automotive brands in the Stellantis' The advertising pieces were seen by millions of users worldwide.`,
          iconUrl: '/assets/logos/stellantis.png',
          tags: ['JavaScript', 'React', 'GSAP', 'SCSS', 'Jest', 'RTL', 'Puppeteer'],
        },
        {
          name: 'Virgin Voyages 🛳',
          role: 'Web Engineer',
          description:
            'Development of the frontend components for the Content Management System to raise the customer conversion rate.',
          iconUrl: '/assets/logos/virgin-voyages.png',
          tags: ['TypeScript', 'SCSS', 'Magnolia', 'FTL'],
        },
      ],
    },
    {
      name: 'PushDev',
      type: 'Part-time - Remote',
      startDate: 'Nov/2019',
      iconUrl: '/assets/logos/pushdev.jpg',
      href: 'https://github.com/pushdev-code',
      projects: [
        {
          name: 'Web development Bootcamps',
          role: 'Co-founder and Web Engineer',
          description:
            'Directed Full Stack web development classes using tools such as GIT, HTML, CSS and JavaScript.',
          iconUrl: '/assets/logos/pushdev-bootcamps.jpg',
          tags: ['HTML', 'CSS', 'GIT', 'JavaScript', 'React'],
        },
      ],
    },
    {
      name: 'Pontificia Universidad Javeriana',
      type: 'Part-time - On-site',
      startDate: 'Jan/2017',
      endDate: 'Nov/2019',
      iconUrl: '/assets/logos/javeriana.png',
      href: 'https://www.javeriana.edu.co/inicio',
      projects: [
        {
          name: 'Basic algorithms and Object Oriented Programming',
          role: 'Teacher Assistant',
          description:
            'Drive students to the best practices in basic algorithms and object-oriented programming classes (C++, Java) by giving classes and giving valuable feedback.',
          iconUrl: '/assets/logos/code.jpg',
          tags: ['C++', 'Java'],
        },
        {
          name: 'Red Somos',
          role: 'Engineer Intern',
          description:
            'Develop and implement new documentation to manage the indicators of the strategic plan.',
          iconUrl: '/assets/logos/red-somos.jpeg',
          tags: ['Google Sheets', 'Visual Basic'],
        },
      ],
    },
  ])
}