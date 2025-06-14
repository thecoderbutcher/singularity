import { Playlist } from '@prisma/client'
import { usePlaylists } from '@renderer/context/PlaylistContext/PlaylistHook'
import { useSongs } from '@renderer/context/SongContext/SongHook'
import { useEffect } from 'react'
import { useCallback } from 'react'

function ListPlaylist(): React.JSX.Element {
  const { playlistState, playlistDispatch } = usePlaylists()
  const { songDispatch } = useSongs()

  const loadSongs = useCallback(
    async (playlistId: number): Promise<void> => {
      const data = await window.electron.ipcRenderer.invoke('song:getAll', playlistId)
      songDispatch({ type: 'SET_SONGS', payload: data })
    },
    [songDispatch]
  )

  const loadPlaylists = useCallback(async (): Promise<void> => {
    const data = await window.electron.ipcRenderer.invoke('playlist:getAll')
    playlistDispatch({ type: 'SET_PLAYLISTS', payload: data })
  }, [playlistDispatch])

  useEffect(() => {
    loadPlaylists()
  }, [loadPlaylists])

  const handleSelectPlaylist = (playlist: Playlist): void => {
    playlistDispatch({ type: 'SELECT_PLAYLIST', payload: playlist })
    loadSongs(playlist.id)
  }

  return (
    <div className="flex flex-col justify-start items-center gap-2 lg:gap-4 p-2 lg:px-4 w-full flex-1 overflow-y-auto h-full">
      {playlistState.playlists.map((playlist) => (
        <button
          key={playlist.id}
          className={`w-full flex justify-center items-center  text-xs lg:text-base border border-secondary/20 rounded-md py-2 hover:bg-secondary-dark hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer ${playlist.id === playlistState.playlistSelected?.id ? 'bg-secondary-dark text-primary' : 'bg-primary-dark/50 text-secondary'}`}
          onClick={() => handleSelectPlaylist(playlist)}
        >
          {playlist.name}
        </button>
      ))}
    </div>
  )
}

export default ListPlaylist
