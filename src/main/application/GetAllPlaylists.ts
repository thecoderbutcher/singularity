import { PlaylistRepository } from '../domain/PlaylistRepository'

export class GetAllPlaylists {
  constructor(private repo: PlaylistRepository) {}

  async execute(): Promise<ReturnType<PlaylistRepository['getAll']>> {
    return await this.repo.getAll()
  }
}
