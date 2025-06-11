import { prisma } from '../lib/prisma'
import { Song } from '@prisma/client'

export async function addSongPlaylist(
  playlistId: number,
  title: string,
  artist: string,
  album: string,
  duration: number,
  path: string
): Promise<Song> {
  const song = await prisma.song.create({
    data: {
      title,
      artist,
      album,
      duration,
      path,
      playlistId
    }
  })

  return song
}
