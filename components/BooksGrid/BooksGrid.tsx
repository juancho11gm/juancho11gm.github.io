import { Book } from '@components/Book/Book';
import { SectionTitle } from '@components/SectionTitle/SectionTitle';
import { BookType } from '@interfaces/book';
import { fetcher } from '@lib/fetcher';
import useSWR from 'swr';

const BooksGrid = () => {
	const { data, error } = useSWR<BookType[]>('/api/books', fetcher);
	if (error || !data) return;
	const BookList = data.map(
		({ title, author, date, description, tags, imageUrl, shopUrl }, index) => (
			<Book
				key={`${index}-${title}`}
				title={title}
				author={author}
				date={date}
				description={description}
				tags={tags}
				imageUrl={imageUrl}
				shopUrl={shopUrl}
			/>
		)
	);

	return (
		<section className='my-8'>
			<SectionTitle text='Recommended Books.' />
			<p className='my-4 md:my-8'>Here you will find some books I recommend.</p>
			<div className='my-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
				{BookList}
			</div>
		</section>
	);
};

export { BooksGrid };
