import Link from 'next/link';
import useSWR from 'swr';
import classNames from 'classnames';
import { NowPlayingSong } from '@interfaces/spotify';
import { Spotify } from '@components/Icons/Spotify/Spotify';
import { fetcher } from 'lib/fetcher';
import styles from './SpotifyNow.module.css';

const Bars = () => {
	return (
		<div className='mt-14 flex'>
			<span className={`${styles.bar} ${styles.bar1}`}></span>
			<span className={`${styles.bar} ${styles.bar2}`}></span>
			<span className={`${styles.bar} ${styles.bar3}`}></span>
			<span
				className={classNames(
					styles.bar,
					styles.bar4,
					'hidden sm:inline-block'
				)}
			></span>
		</div>
	);
};

const SpotifyNow = () => {
	const { data, error } = useSWR<NowPlayingSong>('/api/spotify-now', fetcher);

	const showSpotify = error !== '' && data?.isPlaying;

	return (
		<div className='md:h-36 py-8 text-center flex items-center'>
			<Spotify className={'self-center'} />
			{showSpotify ? (
				<Link
					className='ml-4 mr-8 text-left'
					href={data?.songUrl}
					target='_blank'
				>
					Now Playing: {data?.title} - {data?.artist}
				</Link>
			) : (
				<p className='ml-2 mr-8 text-left'>Not Playing.</p>
			)}
			{showSpotify && <Bars />}
		</div>
	);
};

export { SpotifyNow };
