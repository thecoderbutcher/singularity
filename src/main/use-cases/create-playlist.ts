import { prisma } from '../lib/prisma'

export async function createPlaylist(name: string) {
  const playlist = await prisma.playlist.create({
    data: {
      name
    }
  })

  return playlist
}
