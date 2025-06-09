import { prisma } from '../lib/prisma'
import { Song } from '@prisma/client'
import { SongRepository } from '../domain/SongRepository'

export class PrismaSongRepository implements SongRepository {
  async getAll(playlistId: number): Promise<Song[]> {
    return await prisma.song.findMany({ where: { playlistId }, orderBy: { createdAt: 'desc' } })
  }
}
