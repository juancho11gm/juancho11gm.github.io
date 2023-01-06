import Image from 'next/image';

type Props = {
	name: string;
	picture: string;
};

const Avatar = ({ name, picture }: Props) => {
	return (
		<div className='flex items-center'>
			<div className='w-8 h-8 relative'>
				<Image
					src={picture}
					className='rounded-full'
					alt={name}
					fill
					sizes='100%'
				/>
			</div>
		</div>
	);
};

export { Avatar };
