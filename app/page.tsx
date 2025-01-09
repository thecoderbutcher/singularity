import Image from "next/image";
import Topbar from "./(components)/Topbar";
import Footer from "./(components)/Footer";
import MusicDetails from "./MusicDetails/pages";
import ControlMusic from "./ControlMusic/page";
import Plaulists from "./Playlists/page";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 h-screen bg-primary/80 text-secondary">
      <Topbar />
      <div className="grid flex-1 grid-cols-12">
        <MusicDetails/>
        
        <div className="col-span-7 ">
        </div>
        
        <Plaulists/>
      </div>
      <ControlMusic />
      <Footer/>
    </div>
  );
}
