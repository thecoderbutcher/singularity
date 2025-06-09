import { ipcMain } from 'electron'
import { PrismaSongRepository } from '../infrastructure/PrismaSongRepository'
import { GetAllSongs } from '../application/GetAllSongs'

const repo = new PrismaSongRepository()
const useCase = new GetAllSongs(repo)

ipcMain.handle('song:getAll', async (_event, playlistId: number) => {
  return await useCase.execute(playlistId)
})
