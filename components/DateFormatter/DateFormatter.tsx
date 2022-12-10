import { parseISO, format } from 'date-fns';

type Props = {
	dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
	const date = parseISO(dateString);
	return (
		<time className='text-gray-700 dark:text-gray-300' dateTime={dateString}>
			{format(date, 'LLLL	d, yyyy')}
		</time>
	);
};

export { DateFormatter };
