import {
  HiMiniPlay,
  HiMiniPause,
  HiMiniForward,
  HiMiniBackward,
  HiMiniRectangleStack,
  HiStop
} from 'react-icons/hi2'

function ControlSong(): React.JSX.Element {
  return (
    <div className="col-span-4 2xl:col-span-3 flex h-full w-full gap-1 lg:gap-2 text-2xl lg:text-4xl xl:text-5xl">
      <button className="w-full p-1 lg:p-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200">
        <HiStop />
      </button>
      <button className="w-full p-1 lg:p-2 border border-accent-dark text-accent-dark flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200">
        <HiMiniBackward />
      </button>
      <button className="w-full p-1 lg:p-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200">
        <HiMiniPlay />
      </button>
      <button className="w-full p-1 lg:p-2 border border-accent-dark text-accent-dark flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200">
        <HiMiniForward />
      </button>
      <button className="w-full p-1 lg:p-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200">
        <HiMiniRectangleStack />
      </button>
    </div>
  )
}

export default ControlSong
