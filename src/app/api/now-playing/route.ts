import { getNowPlaying } from "@/lib/spotify/spotify";

export async function GET() {
  const data = await getNowPlaying();
  return Response.json(data, {
    headers: { "Cache-Control": "no-store" },
  });
}
