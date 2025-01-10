import { HiArrowPathRoundedSquare, HiArrowsRightLeft, HiAdjustmentsVertical, HiSpeakerXMark} from "react-icons/hi2";
const OptionButtons = () => {
  return (
    <div className="col-span-1 grid grid-cols-2 items-center justify-center gap-4 px-2 ">
        <div className="border border-accent text-accent flex justify-center items-center py-1 hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200"><HiArrowPathRoundedSquare/></div>
        <div className="border border-accent text-accent flex justify-center items-center py-1 hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200"><HiArrowsRightLeft/></div>
        <div className="border border-accent text-accent flex justify-center items-center py-1 hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200"><HiAdjustmentsVertical/></div>
        <div className="border border-accent text-accent flex justify-center items-center py-1 hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200"><HiSpeakerXMark/></div>
    </div> 
  )
}

export default OptionButtons