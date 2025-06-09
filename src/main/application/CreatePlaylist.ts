import { PlaylistRepository } from '../domain/PlaylistRepository'

export class CreatePlaylist {
  constructor(private repo: PlaylistRepository) {}

  async execute(name: string): Promise<ReturnType<PlaylistRepository['create']>> {
    if (!name.trim()) throw new Error('El nombre no puede estar vacío')
    return await this.repo.create(name)
  }
}
