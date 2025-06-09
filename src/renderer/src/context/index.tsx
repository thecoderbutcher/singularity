import { PlaylistProvider } from './PlaylistContext/PlaylistProvider'
import { SongProvider } from './SongContext/SongProvider'

export const ContextProvider = ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement => {
  return (
    <PlaylistProvider>
      <SongProvider>{children}</SongProvider>
    </PlaylistProvider>
  )
}
