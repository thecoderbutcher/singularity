import { prisma } from '../lib/prisma'

export async function createPlaylist(name: string): Promise<import('@prisma/client').Playlist> {
  const playlist = await prisma.playlist.create({
    data: {
      name
    }
  })

  return playlist
}
