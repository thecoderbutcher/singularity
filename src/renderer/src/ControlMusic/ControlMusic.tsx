import ControlProgress from './components/ControlProgress'
import ControlSong from './components/ControlSong'
import OptionButtons from './components/OptionButtons'

function ControlMusic(): React.JSX.Element {
  return (
    <div className="grid grid-cols-12 items-center justify-center p-2 gap-2 lg:gap-4 border-t border-t-accent">
      <OptionButtons />
      <ControlSong />
      <ControlProgress />
    </div>
  )
}

export default ControlMusic
