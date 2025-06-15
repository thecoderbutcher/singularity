import { usePlaylists } from '@renderer/context/PlaylistContext/PlaylistHook'
import { useSongs } from '@renderer/context/SongContext/SongHook'
import { LuListMusic, LuDot } from 'react-icons/lu'
import ScrollTextHover from './ScrollTextHover'
import { formatDuration } from '../../assets/lib/index'

function ListSongs(): React.JSX.Element {
  const { songState, songDispatch } = useSongs()
  const { playlistState } = usePlaylists()

  if (songState.songs.length === 0) {
    return (
      <div className="flex flex-col h-full justify-center items-center text-secondary/50 cursor-pointer text-lg">
        Aun no se han agregado mp3
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-1  p-1 lg:px-4 overflow-y-auto overflow-x-hidden">
      <div className="flex justify-between w-full py-2 text-lg text-accent-dark items-center border-b border-b-accent-dark">
        <p className="flex items-center gap-2 font-semibold text-base">
          <span className="text-accent text-2xl">
            <LuDot />
          </span>
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
            onClick={() => songDispatch({ type: 'SELECT_SONG', payload: song })}
            className={`flex justify-between items-center rounded-md pl-1 py-1 hover:bg-accent-dark hover:text-secondary hover:scale-105 w-full transition-all duration-200 cursor-pointer ${songState.songSelected?.id === song.id ? 'bg-accent-dark text-secondary' : ''}`}
          >
            <div className="flex items-center overflow-hidden pr-2 w-full">
              <span className="text-secondary-dark text-2xl">
                <LuDot />
              </span>

              <div className="flex flex-col overflow-hidden">
                <ScrollTextHover>{song.title}</ScrollTextHover>
                <p className="text-xs text-secondary/60 font-extralight">{song.artist}</p>
              </div>
            </div>
            <p className="pr-2">{formatDuration(song.duration)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListSongs
