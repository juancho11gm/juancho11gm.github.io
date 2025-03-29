import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

const OverviewCard = () => {
	return (
		<section className='flex flex-col my-8'>
			<div className='relative inline-block mx-auto'>
				<div className='w-[200px] h-[200px] rounded-[50%] bg-neutral-900' />
				<Image
					src='/assets/me/profilepic.png'
					className='absolute z-[1] bottom-0 left-0'
					width={200}
					height={200}
					alt='Juan González'
				/>
				<div
					className='absolute z-[2] left-0 top-[100px] w-[200px] h-[200px]'
					style={{
						backgroundImage:
							'radial-gradient(circle closest-corner at 50% 0%, transparent 0, transparent 100px, #000 101px, #000 102px)',
					}}
				/>
			</div>

			<div className='mx-auto z-[2] text-center'>
				<h1 className='text-center font-bold text-3xl mt-4 sm:text-5xl'>
					Juan González
				</h1>
				<Link
					className='block text-center mb-2 text-gray-400 text-lg'
					href='https://github.com/juancho11gm'
					target='_blank'
				>
					@juancho11gm
				</Link>
				<p className='text-lg'>
					<strong>Web Engineer</strong> at{' '}
					<Link
						className='text-purple-500'
						href='https://kinesso.com'
						target='_blank'
					>
						Kinesso
					</Link>
					.
				</p>
				<p className='mt-4 text-lg sm:mt-2 text-gray-400'>
					JavaScript and AI enthusiast.
				</p>
				<p className='text-lg text-gray-400'>
					Learning everyday about tech and personal growth.
				</p>
			</div>
		</section>
	);
};

export { OverviewCard };
