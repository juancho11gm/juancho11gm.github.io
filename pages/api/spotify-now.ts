import { NextApiRequest, NextApiResponse } from 'next';
import { getPlayingSong } from 'lib/spotify';
import { SpotifyData } from '@interfaces/spotify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const response = await getPlayingSong();

	if (response.status === 204 || response.status > 400) {
		return new Response(JSON.stringify({ isPlaying: false }), {
			status: 200,
			headers: {
				'content-type': 'application/json',
			},
		});
	}

	const song: SpotifyData = await response.json();

	if (song?.item === null) {
		res.status(200).json({
			isPlaying: false,
		});
	}

	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;

	res.status(200).json({
		album,
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title,
	});
};
