export default function handler(req, res) {
  res.status(200).json([
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      date: '2021',
      category: 'Finances',
      description: '',
      tags: ['🪴 Personal Growth', '📆 Habits', '🧠 Psychology'],
      imageUrl: '/assets/books/atomic-habits.webp'
    },
    {
      title: 'The Psychology of money',
      author: 'Morgan Housel',
      date: '2021',
      category: 'Finances',
      description: '',
      tags: ['🪴 Personal Growth', '🐷 Finance', '🧠 Psychology'],
      imageUrl: '/assets/books/the-psychology-of-money.webp'
    },
    {
      title: 'Never split the difference',
      author: 'Chris Voss',
      date: '2021',
      category: 'Finances',
      description: '',
      tags: ['🪴 Personal Growth', '🤝 Negotiation', '🧠 Psychology'],
      imageUrl: '/assets/books/never-split-the-difference.webp'
    },
    {
      title: 'Lo que debes saber del dinero y nunca te enseñaron',
      author: 'Danilo Raymond',
      date: '2021',
      category: 'Finances',
      description: '',
      tags: ['🪴 Personal Growth', '🐷 Finance'],
      imageUrl: '/assets/books/lo-que-debes-saber-del-dinero.webp'
    }
  ])
}