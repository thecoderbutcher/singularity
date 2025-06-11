import { Song } from '@prisma/client'

export interface SongRepository {
  getAll(playlistId: number): Promise<Song[]>

  add(
    playlistId: number,
    title: string,
    artist: string,
    album: string,
    duration: number,
    path: string
  ): Promise<Song>
}
