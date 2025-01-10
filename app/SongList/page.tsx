import { GiSoundWaves } from "react-icons/gi";
import { PiListMagnifyingGlassLight } from "react-icons/pi";

const SongList = () => {
  return (
    <div className="col-span-7 flex flex-col p-4">
        <div className="grid grid-cols-12 gap-2 items-center justify-center">
            <div className="col-span-2 flex justify-end text-accent text-3xl">
                <GiSoundWaves />
            </div>
            <div className="col-span-8">
                <input type="search" name="search" id="" className="bg-primary-dark/0 border-b border-accent text-accent rounded-md w-full focus:outline-none focus:px-2 p-0 placeholder:text-secondary/50 placeholder:text-sm placeholder:px-2" placeholder="Quick Search" />
            </div>
            <div className="col-span-2 flex gap-1 items-center text-accent text-2xl">
                <PiListMagnifyingGlassLight/>
                <span className="text-sm">total song found</span>
            </div>
        </div>
        <div className="flex flex-col justify-center p-12">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="flex justify-between text-lg text-accent-dark items-center border-b border-b-accent-dark">
                        <p className="font-bold"> <span className="text-accent text-2xl">·</span> Folder name</p>
                        <p>total time / total song</p>
                    </div>
                    <div className="flex flex-col px-2">
                        <div className="flex justify-between items-center rounded-md px-2 hover:bg-accent-dark hover:text-secondary cursor-pointer ">
                            <p className=""> 
                                <span className="text-secondary-dark text-2xl font-bold">·</span>
                                <span className="pl-4">Song name - Artists name</span>
                            </p>
                            <p>total time</p>
                        </div>
                        <div className="flex justify-between items-center rounded-md px-2 hover:bg-accent-dark hover:text-secondary cursor-pointer ">
                            <p className=""> 
                                <span className="text-secondary-dark text-2xl font-bold">·</span>
                                <span className="pl-4">Song name - Artists name</span>
                            </p>
                            <p>total time</p>
                        </div>
                        <div className="flex justify-between items-center rounded-md px-2 hover:bg-accent-dark hover:text-secondary cursor-pointer ">
                            <p className=""> 
                                <span className="text-secondary-dark text-2xl font-bold">·</span>
                                <span className="pl-4">Song name - Artists name</span>
                            </p>
                            <p>total time</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between items-center rounded-md px-2 hover:bg-accent-dark hover:text-secondary cursor-pointer ">
                    <p className=""> 
                        <span className="text-secondary-dark text-2xl font-bold">·</span>
                        <span className="pl-4">Song name - Artists name</span>
                    </p>
                    <p>total time</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SongList