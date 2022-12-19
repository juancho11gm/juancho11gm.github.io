export default function handler(req, res) {
  res.status(200).json([
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      date: '2018',
      description: 'Good habits can improve our lives. James provides ideas based on scientific research to transform our habits. They allow us to shape our behavior and how to apply the changes to our systems to improve our lives. ',
      tags: ['🪴 Personal Growth', '📆 Habits', '🧠 Psychology'],
      imageUrl: '/assets/books/atomic-habits.webp',
      shopUrl: 'https://jamesclear.com/atomic-habits'
    },
    {
      title: 'The Psychology of money',
      author: 'Morgan Housel',
      date: '2020',
      description: 'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life’s most important topics.',
      tags: ['🪴 Personal Growth', '🐷 Finance', '🧠 Psychology'],
      imageUrl: '/assets/books/the-psychology-of-money.webp',
      shopUrl: 'https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681'
    },
    {
      title: 'Never split the difference',
      author: 'Chris Voss',
      date: '2016',
      description: 'Inteligencia emocional para conseguir acuerdos donde no se puede permitir una respuesta negativa. Experiencias compartidas por un negociador del FBI que sirven para los negocios y la vida. Las reglas están basadas en la experiencia.',
      tags: ['🪴 Personal Growth', '🤝 Negotiation', '🧠 Psychology'],
      imageUrl: '/assets/books/never-split-the-difference.webp',
      shopUrl: 'https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/0062407805'
    },
    {
      title: 'Lo que debes saber del dinero y nunca te enseñaron',
      author: 'Danilo Raymond',
      date: '2019',
      description: 'Tips to financial success through stories. Stories about borrowing, saving, investing and spending.',
      tags: ['🪴 Personal Growth', '🐷 Finance'],
      imageUrl: '/assets/books/lo-que-debes-saber-del-dinero.webp',
      shopUrl: 'https://www.planetadelibros.com.co/libro-lo-que-debes-saber-del-dinero-y-nunca-te-ensenaron-nueva-edicion/352267'
    }
  ])
}