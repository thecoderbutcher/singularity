import { Song } from '@prisma/client'

export interface SongRepository {
  getAll(playlistId: number): Promise<Song[]>
}
