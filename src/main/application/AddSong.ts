import { SongRepository } from '../domain/SongRepository'

export class AddSong {
  constructor(private repo: SongRepository) {}

  async execute(
    playlistId: number,
    title: string,
    artist: string,
    album: string,
    duration: number,
    path: string
  ): Promise<ReturnType<SongRepository['add']>> {
    return await this.repo.add(playlistId, title, artist, album, duration, path)
  }
}
