
import ControlDetails from "./components/ControlDetails";
import SongDetails from "./components/SongDetails"; 
const MusicDetails = () => {
  return (
    <div className="col-span-3 flex flex-col p-8 border-r border-r-accent">
        <div className="border-4 border-slate">
            <img src="/no-cover.jpg" alt="" width={600} height={600}/>
        </div> 
        <div className="w-full h-[1px] bg-gradient-to-r from-accent to-accent-dark mt-2"></div>
        <ControlDetails/>
        <SongDetails/> 
    </div>
  )
}

export default MusicDetails