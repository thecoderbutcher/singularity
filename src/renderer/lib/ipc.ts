export async function scanFolder(folderPath: string) {
  return await window.electron.ipcRenderer.invoke('scan-folder', folderPath)
}
