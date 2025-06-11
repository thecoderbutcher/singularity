import { prisma } from '../lib/prisma'
import { Playlist } from '@prisma/client'

export async function createPlaylist(name: string): Promise<Playlist> {
  const playlist = await prisma.playlist.create({
    data: {
      name
    }
  })

  return playlist
}
