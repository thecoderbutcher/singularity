// src/main/ipc/scan-folder-handler.ts
import { ipcMain } from 'electron'
import { scanMusicFolder } from '../use-cases/scanMusicFolder'

ipcMain.handle('scan-folder', async (_event, folderPath: string) => {
  return await scanMusicFolder(folderPath)
})
