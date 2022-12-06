import { SectionTitle } from '@components/SectionTitle/SectionTitle';

const Intro = () => {
	return (
		<section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
			<SectionTitle text='Blog.' />
		</section>
	);
};

export { Intro };
