'use client'

import { HiMiniPlay, HiMiniPause, HiMiniForward, HiMiniBackward, HiMiniRectangleStack, HiStop} from "react-icons/hi2";
import useAudioStore from "@/zustand/AudioStore";
import { useEffect, useRef } from "react";
import useSongStore from "@/zustand/songStore";

const ControlButtons: React.FC = () => { 
  const audioRef = useRef<HTMLAudioElement>(null);

  const songSelected = useSongStore((state) => state.songSelected);
  const {playing, setPlaying, setAudio} = useAudioStore();

  useEffect(() => {
    if(!audioRef.current) return;

    audioRef.current.src = songSelected.path;
    setAudio(audioRef.current);

    if(playing) audioRef.current?.play();
    
  },[audioRef, setAudio, playing])

  const handlePlayPause = () => {
    if(!audioRef.current) return
    
    if(!playing){
      audioRef.current.src = songSelected.path;
      audioRef.current?.play();
    } 
      
    audioRef.current?.pause(); 
    setPlaying(!playing);
  }

  return (
    <div className="col-span-3 flex h-full gap-4 px-3">
        <button className="text-5xl px-2 py-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-125 transition-all duration-200">
          <HiStop/>
        </button>
        <button className="text-5xl px-2 py-2 border border-accent-dark text-accent-dark flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-125 transition-all duration-200">
          <HiMiniBackward/>
        </button>
        <button 
          className="text-5xl px-2 py-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-125 transition-all duration-200"
          onClick={handlePlayPause}
        >
          {playing ? <HiMiniPause/> : <HiMiniPlay/> }
          
        </button>
        <button className="text-5xl px-2 py-2 border border-accent-dark text-accent-dark flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-125 transition-all duration-200">
          <HiMiniForward/>
        </button>
        <button className="text-5xl px-2 py-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-125 transition-all duration-200">
          <HiMiniRectangleStack/>
        </button>
        <audio ref={audioRef} /> 
    </div>
  )
}

export default ControlButtons