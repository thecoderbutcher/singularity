import { Song } from '@prisma/client'
import { usePlaylists } from '@renderer/context/PlaylistContext/PlaylistHook'
import { useSongs } from '@renderer/context/SongContext/SongHook'
import { PiMusicNotesPlusFill } from 'react-icons/pi'

function BtnAddSong(): React.JSX.Element {
  const { playlistState } = usePlaylists()
  const { songDispatch } = useSongs()

  const addsong = async (): Promise<void> => {
    const filePath = await window.electronAPI.openFile()

    if (filePath) {
      if (!playlistState.playlistSelected) return

      const meta = await window.electronAPI.readMetadata(filePath)
      const song: Song = await window.electron.ipcRenderer.invoke(
        'song:add',
        playlistState.playlistSelected?.id,
        meta.title || 'Titulo desconocido',
        meta.artist || 'Artista desconocido',
        meta.album || 'Album desconocido',
        meta.duration || 0,
        meta.cover || 'none',
        filePath
      )
      songDispatch({ type: 'ADD_SONGS', payload: song })
    }
  }
  return (
    <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
      <button onClick={addsong}>
        <PiMusicNotesPlusFill />
      </button>
    </div>
  )
}

export default BtnAddSong
