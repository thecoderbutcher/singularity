import React, { useEffect, useRef, useState } from 'react'
import { HiSpeakerWave } from 'react-icons/hi2'

function ContolVolume({
  audioRef
}: {
  audioRef: React.RefObject<HTMLAudioElement>
}): React.JSX.Element {
  const [volume, setVolume] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleVolume = (e: React.MouseEvent<HTMLDivElement>): void => {
    const container = containerRef.current
    if (!container || !audioRef) return

    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    const newVolume = Math.max(0, Math.min(1, x / width))

    setVolume(newVolume)
    audioRef.current.volume = newVolume
  }

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [audioRef, volume])

  return (
    <div className="flex w-full py-1 gap-1 text-accent">
      <HiSpeakerWave />
      <div
        ref={containerRef}
        onClick={handleVolume}
        className="w-1/2 lg:w-1/3 border-accent border-2 rounded-lg cursor-pointer"
      >
        <div
          className="h-full bg-secondary-dark rounded-md"
          style={{ width: `${volume * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ContolVolume
