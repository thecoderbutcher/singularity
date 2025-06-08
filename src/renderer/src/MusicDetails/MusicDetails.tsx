import ControlDetails from './components/ControlDetails'
import SongDetails from './components/SongDetails'

function MusicDetails(): React.JSX.Element {
  return (
    <div className="col-span-3 flex flex-col gap-2 p-4 lg:p-8 border-r border-r-accent">
      <SongDetails />
      <ControlDetails />
    </div>
  )
}

export default MusicDetails
