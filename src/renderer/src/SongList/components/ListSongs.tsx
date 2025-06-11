import { usePlaylists } from '@renderer/context/PlaylistContext/PlaylistHook'
import { useSongs } from '@renderer/context/SongContext/SongHook'
import { LuListMusic } from 'react-icons/lu'

function ListSongs(): React.JSX.Element {
  const { songState } = useSongs()
  const { playlistState } = usePlaylists()

  function formatDuration(seconds: number): string {
    const minute = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(minute).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  if (songState.songs.length === 0) {
    return (
      <div className="flex flex-col h-full justify-center items-center text-secondary/50 cursor-pointer text-lg">
        Aun no se han agregado mp3
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-1 justify-center p-1 lg:pt-4 lg:px-4 ">
      <div className="flex justify-between w-full py-2 px-2 text-lg text-accent-dark items-center border-b border-b-accent-dark">
        <p className="flex items-center gap-2 font-semibold text-base">
          <span className="w-1 h-1 bg-accent rounded-full"></span>
          {playlistState.playlistSelected?.name}
        </p>
        <p className="flex gap-1 items-center text-xs">
          <LuListMusic className="text-lg" />
          {songState.songs.length}
        </p>
      </div>
      <div className="flex flex-col">
        {songState.songs.map((song) => (
          <div
            key={song.id}
            className={`flex justify-between items-center rounded-md pl-2 py-1 hover:bg-accent-dark hover:text-secondary hover:scale-105 w-full transition-all duration-200 cursor-pointer `}
          >
            <p className="flex items-center">
              <span className="w-1 h-1 bg-secondary-dark rounded-full"></span>
              <span className="pl-4 text-sm">
                {song.title} - {song.artist}
              </span>
            </p>
            <p className="pr-2">{formatDuration(song.duration)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListSongs
