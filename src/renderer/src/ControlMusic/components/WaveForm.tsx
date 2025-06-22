// components/Waveform.tsx
import { useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'

interface WaveformProps {
  audioUrl: string
  isPlaying: boolean
  onPlayPauseToggle: () => void
}

const Waveform = ({ audioUrl, isPlaying, onPlayPauseToggle }: WaveformProps) => {
  const waveformRef = useRef<HTMLDivElement>(null)
  const wavesurfer = useRef<WaveSurfer | null>(null)

  useEffect(() => {
    if (!waveformRef.current || !audioUrl) return

    // Destruir instancia previa
    if (wavesurfer.current) {
      wavesurfer.current.destroy()
    }

    // Crear nueva instancia
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#ccc',
      progressColor: '#10b981', // tailwind emerald
      barWidth: 4,
      height: 80
    })

    // Cargar el audio
    wavesurfer.current.load(audioUrl)

    return () => {
      wavesurfer.current?.destroy()
    }
  }, [audioUrl])

  useEffect(() => {
    if (!wavesurfer.current) return

    if (isPlaying) {
      wavesurfer.current.play()
    } else {
      wavesurfer.current.pause()
    }
  }, [isPlaying])

  return (
    <div onClick={onPlayPauseToggle}>
      <div ref={waveformRef} className="w-full cursor-pointer" />
    </div>
  )
}

export default Waveform
