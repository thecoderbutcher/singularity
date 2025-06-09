import { PlaylistRepository } from '../domain/PlaylistRepository'

export class GetAllPlaylists {
  constructor(private repo: PlaylistRepository) {}

  async execute() {
    return await this.repo.getAll()
  }
}
