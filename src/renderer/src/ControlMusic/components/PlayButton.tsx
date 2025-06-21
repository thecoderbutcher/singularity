import { useSongs } from '@renderer/context/SongContext/SongHook'
import { useEffect } from 'react'
import { HiMiniPlay, HiMiniPause } from 'react-icons/hi2'

export function PlayButton(audioRef): React.JSX.Element {
  const { songState, songDispatch } = useSongs()

  useEffect(() => {
    const audio = audioRef.current
    const song = songState.songSelected
    if (!audio || !song) return

    window.electronAPI
      .getAudio(song.path)
      .then((url: string) => {
        audio.src = url
        audio.load()

        if (songState.isPlaying) {
          audio.play().catch(console.error)
        }
      })
      .catch(console.error)
  }, [songState.songSelected, songDispatch, songState.isPlaying, audioRef])

  useEffect(() => {
    if (!audioRef.current) return

    if (songState.isPlaying) {
      audioRef.current.play().catch(console.error)
    } else {
      audioRef.current.pause()
    }
  }, [songState.isPlaying, audioRef])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    songDispatch({ type: 'SET_AUDIO', payload: audio })

    const handleEnded = (): void => {
      songDispatch({ type: 'SET_PLAY', payload: false })
    }

    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  }, [songDispatch, audioRef])

  const handlePlayPause = async (): Promise<void> => {
    if (!audioRef.current || !songState.songSelected) return
    songDispatch({ type: 'SET_PLAY', payload: !songState.isPlaying })
  }
  return (
    <>
      <button
        onClick={handlePlayPause}
        className="w-full p-1 lg:p-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200"
      >
        {!songState.isPlaying ? <HiMiniPlay /> : <HiMiniPause />}
      </button>
    </>
  )
}
