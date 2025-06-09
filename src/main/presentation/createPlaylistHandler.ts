import { ipcMain } from 'electron'
import { PrismaPlaylistRepository } from '../infrastructure/PrismaPlaylistRepository'
import { CreatePlaylist } from '../application/CreatePlaylist'

const repo = new PrismaPlaylistRepository()
const useCase = new CreatePlaylist(repo)

ipcMain.handle('playlist:create', async (_event, name: string) => {
  return await useCase.execute(name)
})
