import { HiMiniPlay, HiMiniPause, HiMiniForward, HiMiniBackward, HiMiniRectangleStack, HiStop} from "react-icons/hi2";
const ControlButtons = () => {
  return (
    <div className="col-span-3 flex h-full gap-4 px-3">
        <div className="text-5xl px-2 py-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-125 transition-all duration-200"><HiStop/></div>
        <div className="text-5xl px-2 py-2 border border-accent-dark text-accent-dark flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-125 transition-all duration-200"><HiMiniBackward/></div>
        <div className="text-5xl px-2 py-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-125 transition-all duration-200"><HiMiniPlay/></div>
        <div className="text-5xl px-2 py-2 border border-accent-dark text-accent-dark flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-125 transition-all duration-200"><HiMiniForward/></div>
        <div className="text-5xl px-2 py-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-125 transition-all duration-200"><HiMiniRectangleStack/></div>
    </div>
  )
}

export default ControlButtons