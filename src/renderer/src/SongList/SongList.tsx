import ControlSong from './components/ControlSong'
import ListSongs from './components/ListSongs'
import SearchSongs from './components/SearchSongs'

function SongList(): React.JSX.Element {
  return (
    <div className="col-span-7 flex flex-col p-1 lg:p-2 overflow-y-auto overflow-x-hidden h-full w-full">
      <SearchSongs />
      <ListSongs />
      <ControlSong />
    </div>
  )
}

export default SongList
