import { SongRepository } from '../domain/SongRepository'

export class GetAllSongs {
  constructor(private repo: SongRepository) {}

  async execute(playlistId: number): Promise<ReturnType<SongRepository['getAll']>> {
    return await this.repo.getAll(playlistId)
  }
}
