import { Book } from '@components/Book/Book';
import { SectionTitle } from '@components/SectionTitle/SectionTitle';
import { BookType } from '@interfaces/book';

export const BooksGrid = ({ books }: { books: BookType[] }) => {
	// Client Side SWR (Stale while revalidate)
	const BookList = books.map(
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
			<p className='my-4 md:my-8'>
				What should you read next?. Here you will find some books you should
				consider.
			</p>
			<div className='my-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
				{BookList}
			</div>
		</section>
	);
};
