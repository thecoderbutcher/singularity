import { HiLockClosed } from 'react-icons/hi2'
import BtnAddPlaylist from './BtnAddPlaylist'
import BtnDeletePlaylist from './BtnDeletePlaylist'

function ControlPlaylist(): React.JSX.Element {
  return (
    <div className="flex justify-end w-full px-4 pt-4 pb-1 items-center gap-2">
      <BtnAddPlaylist />
      <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
        <HiLockClosed />
      </div>
      <BtnDeletePlaylist />
    </div>
  )
}

export default ControlPlaylist
