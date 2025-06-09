import BtnAddSong from './BtnAddSong'
import BtnDeleteSong from './BtnDeleteSong'
import BtnAddFolderSong from './BtnAddFolderSong'

function ControlSong(): React.JSX.Element {
  return (
    <div className="flex flex-1 gap-2 justify-end items-end">
      <BtnAddSong />
      <BtnDeleteSong />
      <BtnAddFolderSong />
    </div>
  )
}

export default ControlSong
