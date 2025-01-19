import { GiSoundWaves } from "react-icons/gi";
import { PiListMagnifyingGlassLight } from "react-icons/pi";
const SearchSongs = () => {
  return (
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
  )
}

export default SearchSongs