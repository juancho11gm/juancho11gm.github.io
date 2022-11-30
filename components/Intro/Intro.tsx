import { SectionTitle } from '@components/SectionTitle/SectionTitle';

const Intro = () => {
	return (
		<section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
			<SectionTitle text='Blog.' />
			<h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>
				I would be glad if you read my articles.
			</h4>
		</section>
	);
};

export { Intro };
