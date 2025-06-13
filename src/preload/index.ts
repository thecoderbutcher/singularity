import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import fs from 'fs'
import { parseBuffer } from 'music-metadata'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.send('window:minimize'),
  maximize: () => ipcRenderer.send('window:maximize'),
  close: () => ipcRenderer.send('window:close'),
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  getAudioPreview: (filePath: string) =>
    new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) return reject(err)
        const blob = new Blob([data], { type: 'audio/mpeg' })
        const url = URL.createObjectURL(blob)
        resolve(url)
      })
    }),
  readMetadata: (filePath: string) =>
    new Promise((resolve, reject) => {
      fs.readFile(filePath, async (err, buffer) => {
        if (err) return reject(err)
        try {
          const metadata = await parseBuffer(buffer, 'audio/mpeg')
          const picture = metadata.common.picture?.[0]
          let imageBase64

          if (picture) {
            const base64 = Buffer.from(picture.data).toString('base64')
            imageBase64 = `data:${picture.format};base64,${base64}`
          }

          resolve({ ...metadata.common, duration: metadata.format.duration, cover: imageBase64 })
        } catch (e) {
          reject(e)
        }
      })
    }),
  ipcRenderer
})
