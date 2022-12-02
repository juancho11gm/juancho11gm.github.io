export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'HugeInc',
      type: 'Full-time - Remote',
      startDate: '24/08/2020',
      iconUrl: '/assets/logos/huge.jpeg',
      href: 'https://www.hugeinc.com',
      projects: [
        {
          name: 'Stellantis 🏎',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam voluptatum nisi enim! Blanditiis reiciendis accusantium provident, veniam quasi impedit tempora reprehenderit enim incidunt quisquam similique vel, excepturi molestiae officia?',
          iconUrl: '/assets/logos/stellantis.png',
          tags: ['JavaScript', 'React', 'GSAP', 'SCSS', 'Jest', 'Puppeteer'],
        },
        {
          name: 'Virgin Voyages 🛳',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam voluptatum nisi enim! Blanditiis reiciendis accusantium provident, veniam quasi impedit tempora reprehenderit enim incidunt quisquam similique vel, excepturi molestiae officia?',
          iconUrl: '/assets/logos/virgin-voyages.png',
          tags: ['TypeScript', 'SCSS'],
        },
      ],
    },
    {
      name: 'PushDev',
      type: 'Part-time - Remote',
      startDate: '01/11/2019',
      iconUrl: '/assets/logos/pushdev.jpg',
      href: 'https://www.hugeinc.com',
      projects: [
        {
          name: 'Web development Bootcamps',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam voluptatum nisi enim! Blanditiis reiciendis accusantium provident, veniam quasi impedit tempora reprehenderit enim incidunt quisquam similique vel, excepturi molestiae officia?',
          iconUrl: '/assets/logos/pushdev-bootcamps.jpg',
          tags: ['HTML', 'CSS', 'GIT', 'JavaScript', 'React'],
        },
      ],
    },
    {
      name: 'Pontificia Universidad Javeriana',
      type: 'Part-time - On-site',
      startDate: '01/02/2017',
      endDate: '01/07/2019',
      iconUrl: '/assets/logos/javeriana.png',
      href: 'https://www.hugeinc.com',
      projects: [
        {
          name: 'Basic algorithms and Object Oriented Programming',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam voluptatum nisi enim! Blanditiis reiciendis accusantium provident, veniam quasi impedit tempora reprehenderit enim incidunt quisquam similique vel, excepturi molestiae officia?',
          iconUrl: '/assets/logos/code.jpg',
          tags: ['HTML', 'CSS', 'GIT', 'JavaScript', 'React'],
        },
      ],
    },
  ])
}