'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type NowPlayingData =
  | { isPlaying: true; title: string; artist: string; songUrl: string; albumImageUrl: string | null }
  | { isPlaying: false; title: string; artist: string; songUrl: string; albumImageUrl: string | null }
  | { isPlaying: false; title: null }

const POLL_INTERVAL_MS = 30_000

const NowPlaying = () => {
  const [data, setData] = useState<NowPlayingData | null>(null)

  useEffect(() => {
    let active = true

    const fetchNowPlaying = () => {
      fetch('/api/now-playing')
        .then((res) => res.json())
        .then((json) => {
          if (active) setData(json)
        })
        .catch(() => {})
    }

    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, POLL_INTERVAL_MS)

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') fetchNowPlaying()
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      active = false
      clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  if (!data || data.title === null) return null

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-border bg-surface/50 px-3 py-2.5 w-fit max-w-full min-w-0 transition-colors hover:border-muted-2"
    >
      {data.albumImageUrl && (
        <Image
          src={data.albumImageUrl}
          alt={data.title}
          width={40}
          height={40}
          className="rounded-md shrink-0"
        />
      )}
      <span className="flex flex-col min-w-0">
        <span className="text-xs text-muted">
          {data.isPlaying ? 'Listening to' : 'Last played'}
        </span>
        <span className="text-sm text-foreground truncate group-hover:underline underline-offset-2">
          {data.title}
        </span>
        <span className="text-xs text-muted truncate">{data.artist}</span>
      </span>
      {data.isPlaying && (
        <span className="flex items-end gap-0.5 h-3 shrink-0 ml-1" aria-hidden="true">
          <span className="w-0.5 h-full bg-foreground animate-eq-1" />
          <span className="w-0.5 h-full bg-foreground animate-eq-2" />
          <span className="w-0.5 h-full bg-foreground animate-eq-3" />
        </span>
      )}
    </a>
  )
}

export default NowPlaying
