import { Playlist } from '@prisma/client'

export interface PlaylistRepository {
  create(name: string): Promise<Playlist>
  getAll(): Promise<Playlist[]>
}
