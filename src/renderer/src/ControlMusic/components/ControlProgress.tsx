import { formatDuration } from '@renderer/assets/lib'
import { useSongs } from '@renderer/context/SongContext/SongHook'
import { HiMiniSparkles } from 'react-icons/hi2'
import ContolVolume from './ContolVolume'
import { useRef } from 'react'

function ControlProgress(): React.JSX.Element {
  const { songState } = useSongs()
  const audioRef = useRef<HTMLAudioElement>(null)
  return (
    <div className="col-span-7  2xl:col-span-8 flex flex-col justify-end">
      <div className="flex justify-between items-center">
        <audio
          ref={audioRef}
          src="/home/mirai/Music/Cachengue/LO MAS ESCUCHADO 2024 🎧 DIA DEL AMIGO _  MIX LO NUEVO REGGAETON - CACHENGUE - CUMBIA _  DJ En Vivo 🐯(MP3_320K).mp3"
          controls
          autoPlay
          className="hidden"
        />
        <ContolVolume audioRef={audioRef} />
        <div className="flex gap-2 text-primary items-center justify-center bg-accent px-2 py-1 rounded-t-md">
          <div>00:34</div>
          <div>
            <HiMiniSparkles />
          </div>
          <div>{formatDuration(songState.songSelected?.duration || 0)}</div>
        </div>
      </div>
      <div className="flex w-full border border-accent p-2 rounded-b-md">view progress</div>
    </div>
  )
}

export default ControlProgress
