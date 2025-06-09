import { prisma } from '../lib/prisma'
import { Playlist } from '@prisma/client'
import { PlaylistRepository } from '../domain/PlaylistRepository'

export class PrismaPlaylistRepository implements PlaylistRepository {
  async create(name: string): Promise<Playlist> {
    return await prisma.playlist.create({
      data: { name }
    })
  }

  async getAll(): Promise<Playlist[]> {
    return await prisma.playlist.findMany({ orderBy: { createdAt: 'desc' } })
  }
}
