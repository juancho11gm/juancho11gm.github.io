import { Book } from '@components/Book/Book';
import { SectionTitle } from '@components/SectionTitle/SectionTitle';

const BooksGrid = () => {
	return (
		<section className='my-8'>
			<SectionTitle text='Recommended Books.' />
			<p className='my-4 md:my-8'>Here you will find some books I recommend.</p>
			<div className='my-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
				<Book
					title='Lo que debes saber del dinero y nunca te enseñaron'
					author='Danilo Raymond'
					date='2021'
					category='Finances'
					description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet sit quibusdam sint non atque rem ipsam minima. Ab alias magni a, quod, labore eaque amet dolore velit dolorum tempora tenetur?'
					tags={['🪴 Personal Growth', '🐷 Finance', '🧠 Psychology']}
					imageUrl='/assets/books/the-psychology-of-money.webp'
				/>
				<Book
					title='Lo que debes saber del dinero y nunca te enseñaron'
					author='Danilo Raymond'
					date='2021'
					category='Finances'
					description=''
					tags={['🪴 Personal Growth', '🐷 Finance', '🧠 Psychology']}
					imageUrl='/assets/books/atomic-habits.webp'
				/>
				<Book
					title='Lo que debes saber del dinero y nunca te enseñaron'
					author='Danilo Raymond'
					date='2021'
					category='Finances'
					description=''
					tags={['🪴 Personal Growth', '🐷 Finance', '🧠 Psychology']}
					imageUrl='/assets/books/never-split-the-difference.webp'
				/>
				<Book
					title='Lo que debes saber del dinero y nunca te enseñaron'
					author='Danilo Raymond'
					date='2021'
					category='Finances'
					description=''
					tags={['🪴 Personal Growth', '🐷 Finance', '🧠 Psychology']}
					imageUrl='/assets/books/lo-que-debes-saber-del-dinero.webp'
				/>
			</div>
		</section>
	);
};

export { BooksGrid };
