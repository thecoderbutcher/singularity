import ControlPlaylist from './components/ControlPlaylist'
import ListPlaylist from './components/ListPlaylist'

function PlayList(): React.JSX.Element {
  return (
    <div className="col-span-2 border-l border-l-accent-dark flex flex-col justify-center items-center py-0 lg:py-2 w-full overflow-auto scrollbar-none">
      <ListPlaylist />
      <ControlPlaylist />
    </div>
  )
}

export default PlayList
