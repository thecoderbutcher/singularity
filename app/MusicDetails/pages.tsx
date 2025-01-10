import { HiHeart, HiOutlineHeart, HiPencil, HiMinus, HiPlus, HiArrowsUpDown} from "react-icons/hi2";
import { HiUser, HiPlay, HiDocument, HiViewColumns} from "react-icons/hi2";
const MusicDetails = () => {
  return (
    <div className="col-span-3 flex flex-col p-8 border-r border-r-accent">
        <div className="border-4 border-slate">
            <img src="/portada.png" alt="" />
        </div> 
        <div className="w-full h-[1px] bg-gradient-to-r from-accent to-accent-dark mt-2"></div>

        <div className="flex gap-4 justify-center items-center p-2">
            <div className="border border-accent p-1 text-accent hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200"><HiPlus/></div>
            <div className="border border-accent p-1 text-accent hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200"><HiMinus/></div>
            <div className="border border-accent p-1 text-accent hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200"><HiOutlineHeart/></div>
            <div className="border border-accent p-1 text-accent hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200"><HiPencil/></div>
            <div className="border border-accent p-1 text-accent hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200"><HiArrowsUpDown/></div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-1 items-center"><HiPlay className="text-accent"/> <span className="text-secondary-dark">Song played name</span></div>
            <div className="flex gap-1 items-center"><HiUser className="text-accent"/> <span>Artist name</span></div>
            <div className="flex gap-1 items-center"><HiViewColumns className="text-accent"/> <span>Album name</span></div>
            <div className="flex gap-1 items-center"><HiDocument className="text-accent"/> <span>File metadata info</span></div>
        </div>
    </div>
  )
}

export default MusicDetails