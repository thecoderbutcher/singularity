import { HiArrowPathRoundedSquare, HiArrowsRightLeft, HiAdjustmentsVertical, HiSpeakerXMark} from "react-icons/hi2";
import { HiMiniPlay, HiMiniPause, HiMiniForward, HiMiniBackward, HiMiniRectangleStack, HiStop} from "react-icons/hi2";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiMiniSparkles } from "react-icons/hi2";

const ControlMusic = () => {
  return (
    <div className="grid grid-cols-12 items-center justify-center p-4 border-t border-t-accent">
        <div className="col-span-1 grid grid-cols-2 items-center justify-center gap-4 px-2 ">
            <div className="border border-accent text-accent flex justify-center items-center py-1 hover:scale-105 hover:text-primary hover:bg-accent rounded-md transition-all duration-200"><HiArrowPathRoundedSquare/></div>
            <div className="border border-accent text-accent flex justify-center items-center py-1 hover:scale-105 hover:text-primary hover:bg-accent rounded-md transition-all duration-200"><HiArrowsRightLeft/></div>
            <div className="border border-accent text-accent flex justify-center items-center py-1 hover:scale-105 hover:text-primary hover:bg-accent rounded-md transition-all duration-200"><HiAdjustmentsVertical/></div>
            <div className="border border-accent text-accent flex justify-center items-center py-1 hover:scale-105 hover:text-primary hover:bg-accent rounded-md transition-all duration-200"><HiSpeakerXMark/></div>
        </div> 
        <div className="col-span-3 flex h-full gap-4 px-8">
            <div className="text-5xl px-2 py-2 border border-secondary text-secondary flex justify-center items-center hover:scale-105 hover:text-primary hover:bg-accent  hover:border-accent rounded-md transition-all duration-200"><HiStop/></div>
            <div className="text-5xl px-2 py-2 border border-accent-dark text-accent-dark flex justify-center items-center hover:scale-105 hover:text-primary hover:bg-accent  hover:border-accent rounded-md transition-all duration-200"><HiMiniBackward/></div>
            <div className="text-5xl px-2 py-2 border border-secondary text-secondary flex justify-center items-center hover:scale-105 hover:text-primary hover:bg-accent hover:border-accent rounded-md transition-all duration-200"><HiMiniPlay/></div>
            <div className="text-5xl px-2 py-2 border border-accent-dark text-accent-dark flex justify-center items-center hover:scale-105 hover:text-primary hover:bg-accent  hover:border-accent rounded-md transition-all duration-200"><HiMiniForward/></div>
            <div className="text-5xl px-2 py-2 border border-secondary text-secondary flex justify-center items-center hover:scale-105 hover:text-primary hover:bg-accent  hover:border-accent rounded-md transition-all duration-200"><HiMiniRectangleStack/></div>
        </div>
        <div className="col-span-8 flex flex-col justify-start">
            <div className="flex justify-between items-center">
                <div className="flex w-full py-1 gap-2 text-accent">
                    <HiSpeakerWave />
                    <div className="w-1/3 border-accent border-2 rounded-md">
                        <div className="w-1/2 h-full bg-secondary-dark"></div>
                    </div>
                </div>
                <div className="flex gap-2 text-primary items-center justify-center bg-accent px-2 py-1 rounded-t-md">
                    <div>00:34</div>
                    <div><HiMiniSparkles/></div>
                    <div>03:44</div>
                </div>
            </div>
            <div className="flex w-full border border-accent p-2 rounded-b-md">
                view progress
            </div>
        </div>
    </div>
  )
}

export default ControlMusic