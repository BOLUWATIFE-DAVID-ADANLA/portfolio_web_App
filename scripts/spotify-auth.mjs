// One-off helper to get a Spotify refresh token for the "now playing" widget.
//
// Usage:
//   SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node scripts/spotify-auth.mjs
//
// Requires a Spotify app (developer.spotify.com/dashboard) with this exact
// redirect URI registered: http://127.0.0.1:8888/callback

import http from 'node:http'
import crypto from 'node:crypto'

const PORT = 8888
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`
const SCOPES = [
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-read-recently-played',
].join(' ')

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

if (!clientId || !clientSecret) {
  console.error('Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET env vars.')
  console.error('Usage: SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node scripts/spotify-auth.mjs')
  process.exit(1)
}

const state = crypto.randomBytes(16).toString('hex')

const authorizeUrl = new URL('https://accounts.spotify.com/authorize')
authorizeUrl.searchParams.set('client_id', clientId)
authorizeUrl.searchParams.set('response_type', 'code')
authorizeUrl.searchParams.set('redirect_uri', REDIRECT_URI)
authorizeUrl.searchParams.set('scope', SCOPES)
authorizeUrl.searchParams.set('state', state)

console.log('\nOpen this URL in your browser and approve access:\n')
console.log(authorizeUrl.toString())
console.log(`\nWaiting for the redirect on ${REDIRECT_URI} ...\n`)

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI)

  if (url.pathname !== '/callback') {
    res.writeHead(404).end()
    return
  }

  const code = url.searchParams.get('code')
  const returnedState = url.searchParams.get('state')
  const error = url.searchParams.get('error')

  if (error) {
    res.writeHead(400, { 'Content-Type': 'text/plain' }).end(`Spotify auth error: ${error}`)
    console.error(`Spotify auth error: ${error}`)
    server.close()
    process.exit(1)
  }

  if (returnedState !== state || !code) {
    res.writeHead(400, { 'Content-Type': 'text/plain' }).end('State mismatch or missing code.')
    server.close()
    process.exit(1)
  }

  try {
    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      }),
    })

    const data = await tokenRes.json()

    if (!tokenRes.ok) {
      throw new Error(data.error_description || data.error || 'Token exchange failed')
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' }).end(
      'Success — refresh token printed in your terminal. You can close this tab.'
    )

    console.log('Add this to .env.local:\n')
    console.log(`SPOTIFY_CLIENT_ID=${clientId}`)
    console.log(`SPOTIFY_CLIENT_SECRET=${clientSecret}`)
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`)
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' }).end('Token exchange failed, see terminal.')
    console.error(err)
  } finally {
    server.close()
    process.exit(0)
  }
})

server.listen(PORT)
