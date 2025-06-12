import { IoMenu, IoClose, IoCopyOutline, IoChevronDownOutline } from 'react-icons/io5'

const Header = (): React.JSX.Element => {
  const handleMinimize = (): void => window.electronAPI.minimize()
  const handleMaximize = (): void => window.electronAPI.maximize()
  const handleClose = (): void => window.electronAPI.close()

  return (
    <div className="flex w-full justify-between bg-accent">
      <div className="flex justify-center items-center text-2xl">
        <button onClick={handleMinimize} className="px-2 py-1 rounded-r-md hover:bg-primary/70">
          <IoMenu />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-lg font-bold">Singularity </p>
      </div>
      <div className="flex justify-center items-center text-lg transition-all duration-200">
        <button
          onClick={handleMinimize}
          className="px-2 py-1 rounded-md hover:bg-primary/70 h-full"
        >
          <IoChevronDownOutline />
        </button>
        <button
          onClick={handleMaximize}
          className="px-2 py-1 rounded-md hover:bg-primary/70 h-full"
        >
          <IoCopyOutline />
        </button>
        <button onClick={handleClose} className="px-2 py-1 rounded-l-md hover:bg-red-600/70 h-full">
          <IoClose />
        </button>
      </div>
    </div>
  )
}

export default Header
