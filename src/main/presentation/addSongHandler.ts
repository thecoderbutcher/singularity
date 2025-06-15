import { ipcMain } from 'electron'
import { PrismaSongRepository } from '../infrastructure/PrismaSongRepository'
import { AddSong } from '../application/AddSong'

const repo = new PrismaSongRepository()
const useCase = new AddSong(repo)

ipcMain.handle(
  'song:add',
  async (
    _event,
    playlistId: number,
    title: string,
    artist: string,
    album: string,
    duration: number,
    cover: string,
    path: string
  ) => {
    return await useCase.execute(playlistId, title, artist, album, duration, cover, path)
  }
)
