import queryString from 'query-string';

/**
 * https://developer.spotify.com/console/get-users-currently-playing-track/
 */

const CURRENTLY_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_TRACKS = 'https://api.spotify.com/v1/me/player/recently-played';
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_CLIENT_REFRESH_TOKEN;
// const redirect_uri = process.env.SPOTIFY_CLIENT_REDIRECT_URI;
// const code = process.env.SPOTIFY_CODE;

/**
 * The Client Credentials flow is used in server-to-server authentication. 
 * Since this flow does not include authorization, only endpoints that do not access user information can be accessed.
 * https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/
 */

async function getAccessToken() {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // Follow https://khalilstemmler.com/articles/tutorials/getting-the-currently-playing-song-spotify/
    // and https://theodorusclarence.com/blog/spotify-now-playing 
    // for getting the refresh token
    body: queryString.stringify({
      grant_type: 'refresh_token',
      refresh_token
      // uncomment for getting the permanent refresh token
      // grant_type: 'authorization_code',
      // code,
      // redirect_uri
    })
  });

  return response.json();
};

async function getPlayingSong() {
  const {
    access_token,
    // refresh_token 
  } = await getAccessToken();

  return fetch(CURRENTLY_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  });
}

async function getRecentlyPlayedSongs() {
  const {
    access_token,
    // refresh_token 
  } = await getAccessToken();

  return fetch(RECENTLY_PLAYED_TRACKS, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  });
}

export { getPlayingSong, getRecentlyPlayedSongs }