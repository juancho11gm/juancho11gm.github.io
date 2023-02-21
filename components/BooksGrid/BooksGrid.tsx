import { Book } from '@components/Book/Book';
import { CoverImage } from '@components/CoverImage/CoverImage';
import { PostTitle } from '@components/PostTitle/PostTitle';
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
			<PostTitle>Share Your Book</PostTitle>
			<CoverImage
				orientation={'landscape'}
				title={'Share your Book'}
				src={'/assets/books/share-your-book.jpg'}
				className='m-auto'
			/>
			<p className='mt-4 md:mt-8'></p>
			<p>
				We like to talk about personal growth, finance, economics and
				biographies.
			</p>
			<p className='mb-4 md:mb-8'>
				What should you read next?. Here you will find some books you should
				consider.
			</p>
			<div className='my-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
				{BookList}
			</div>
		</section>
	);
};
