import { useSongs } from '@renderer/context/SongContext/SongHook'
import { useEffect, useRef, useState } from 'react'
import {
  HiMiniPlay,
  HiMiniPause,
  HiMiniForward,
  HiMiniBackward,
  HiMiniRectangleStack,
  HiStop
} from 'react-icons/hi2'

function ControlSong(): React.JSX.Element {
  const { songState, songDispatch } = useSongs()
  const [audioSrc, setAudioSrc] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!audioRef.current || !songState.songSelected) return

    audioRef.current.src = songState.songSelected.path
    audioRef.current.load()

    songDispatch({ type: 'SET_AUDIO', payload: audioRef.current })

    if (songState.isPlaying) audioRef.current.play().catch(console.error)
  }, [songState.songSelected, songDispatch, songState.isPlaying])

  useEffect(() => {
    if (!audioRef.current) return

    if (songState.isPlaying) {
      audioRef.current.play().catch(console.error)
    } else {
      audioRef.current.pause()
    }
  }, [songState.isPlaying])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = (): void => {
      songDispatch({ type: 'SET_PLAY', payload: false })
    }

    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  }, [songDispatch])

  const handlePlayPause = async (): Promise<void> => {
    if (!audioRef.current || !songState.songSelected) return
    songDispatch({ type: 'SET_PLAY', payload: !songState.isPlaying })
  }
  return (
    <div className="col-span-4 2xl:col-span-3 flex h-full w-full gap-1 lg:gap-2 text-2xl lg:text-4xl xl:text-5xl">
      <button className="w-full p-1 lg:p-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200">
        <HiStop />
      </button>
      <button className="w-full p-1 lg:p-2 border border-accent-dark text-accent-dark flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200">
        <HiMiniBackward />
      </button>
      <button
        onClick={handlePlayPause}
        className="w-full p-1 lg:p-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200"
      >
        {!songState.isPlaying ? <HiMiniPlay /> : <HiMiniPause />}
      </button>
      <button className="w-full p-1 lg:p-2 border border-accent-dark text-accent-dark flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200">
        <HiMiniForward />
      </button>
      <button className="w-full p-1 lg:p-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200">
        <HiMiniRectangleStack />
      </button>
      <audio ref={audioRef} preload="auto" />
    </div>
  )
}

export default ControlSong
