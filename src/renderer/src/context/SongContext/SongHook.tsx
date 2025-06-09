import { useContext } from 'react'
import { SongContext } from './SongContext'

export const useSongs = (): React.ContextType<typeof SongContext> => useContext(SongContext)
