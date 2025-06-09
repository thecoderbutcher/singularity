import { ipcMain } from 'electron'
import { PrismaPlaylistRepository } from '../infrastructure/PrismaPlaylistRepository'
import { GetAllPlaylists } from '../application/GetAllPlaylists'

const repo = new PrismaPlaylistRepository()
const useCase = new GetAllPlaylists(repo)

ipcMain.handle('playlist:getAll', async () => {
  return await useCase.execute()
})
