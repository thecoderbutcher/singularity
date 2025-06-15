import { prisma } from '../lib/prisma'
import { Song } from '@prisma/client'
import { SongRepository } from '../domain/SongRepository'

export class PrismaSongRepository implements SongRepository {
  async getAll(playlistId: number): Promise<Song[]> {
    return await prisma.song.findMany({ where: { playlistId }, orderBy: { createdAt: 'desc' } })
  }

  async add(
    playlistId: number,
    title: string,
    artist: string,
    album: string,
    duration: number,
    cover: string,
    path: string
  ): Promise<Song> {
    return await prisma.song.create({
      data: {
        playlistId,
        title,
        artist,
        album,
        duration,
        cover,
        path
      }
    })
  }
}
