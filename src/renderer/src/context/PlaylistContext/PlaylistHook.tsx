import { useContext } from 'react'
import { PlaylistContext } from './PlaylistContext'

export const usePlaylists = (): React.ContextType<typeof PlaylistContext> =>
  useContext(PlaylistContext)
