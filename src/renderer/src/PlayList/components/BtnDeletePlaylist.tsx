import { HiTrash } from 'react-icons/hi2'

function BtnDeletePlaylist(): React.JSX.Element {
  return (
    <>
      <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
        <HiTrash />
      </div>
    </>
  )
}

export default BtnDeletePlaylist
