import { FaFolderTree } from 'react-icons/fa6'

function BtnAddFolderSong(): React.JSX.Element {
  return (
    <>
      <button className="border border-accent/80 text-accent p-1 rounded-md hover:bg-accent hover:text-primary hover:scale-125 transition-all duration-200">
        <FaFolderTree />
      </button>
    </>
  )
}

export default BtnAddFolderSong
