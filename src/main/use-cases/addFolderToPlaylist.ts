export const addFolderToPlaylist = async (playlistId: number, folderPath: string) => {
  const filePath = await window.electron.getMprGilesFromFolder(folderPath)
  for (const path of filePath) {
    await window.Electron.addSongToPlaylist(playlistId, path)
  }
}
