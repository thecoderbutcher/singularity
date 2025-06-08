import { PiListPlusBold } from 'react-icons/pi'

function BtnAddPlaylist(): React.JSX.Element {
  return (
    <>
      <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
        <PiListPlusBold />
      </div>
    </>
  )
}

export default BtnAddPlaylist
