const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

export type NowPlaying =
  | {
      isPlaying: true;
      title: string;
      artist: string;
      album: string;
      albumImageUrl: string | null;
      songUrl: string;
    }
  | {
      isPlaying: false;
      title: string;
      artist: string;
      album: string;
      albumImageUrl: string | null;
      songUrl: string;
    }
  | { isPlaying: false; title: null };

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.access_token as string;
}

function extractTrack(track: {
  name: string;
  artists: { name: string }[];
  album: { name: string; images: { url: string }[] };
  external_urls: { spotify: string };
}) {
  return {
    title: track.name,
    artist: track.artists.map((a) => a.name).join(", "),
    album: track.album.name,
    albumImageUrl: track.album.images[0]?.url ?? null,
    songUrl: track.external_urls.spotify,
  };
}

export async function getNowPlaying(): Promise<NowPlaying> {
  const accessToken = await getAccessToken();
  if (!accessToken) return { isPlaying: false, title: null };

  const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  if (nowPlayingRes.status === 200) {
    const data = await nowPlayingRes.json();
    if (data?.item && data.is_playing) {
      return { isPlaying: true, ...extractTrack(data.item) };
    }
  }

  const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  if (recentRes.status === 200) {
    const data = await recentRes.json();
    const track = data?.items?.[0]?.track;
    if (track) {
      return { isPlaying: false, ...extractTrack(track) };
    }
  }

  return { isPlaying: false, title: null };
}
