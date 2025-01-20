'use client'
import useSongStore from "@/zustand/songStore";
import { HiFolder} from "react-icons/hi2";
import { HiUser, HiPlay, HiDocument, HiViewColumns} from "react-icons/hi2";

const SongDetails = () => {
    const songSelected = useSongStore((state) => state.songSelected)
    return (
        <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-1 items-center"><HiPlay className="text-accent"/>
                <span className="text-secondary-dark overflow-hidden text-nowrap">
                    {songSelected.title? songSelected.title:"No song selected"}
                </span>
            </div>
            <div className="flex gap-1 items-center"><HiUser className="text-accent"/>
                <span className="overflow-hidden text-nowrap">
                    {songSelected.artist? songSelected.artist:"No artist selected"}
                </span>
            </div>
            <div className="flex gap-1 items-center"><HiViewColumns className="text-accent"/>
                <span className="overflow-hidden text-nowrap">
                    {songSelected.album? songSelected.album:"No album selected"}
                </span>
            </div>
            <div className="flex gap-1 items-center"><HiFolder className="text-accent"/>
                <span className="overflow-hidden text-nowrap">
                    {songSelected.path? songSelected.path:"No path selected"}
                </span>
            </div>
            <div className="flex gap-1 items-center"><HiDocument className="text-accent"/>
                <span className="overflow-hidden text-nowrap">
                    File metadata info
                </span>
            </div>
        </div> 
    )
}

export default SongDetails