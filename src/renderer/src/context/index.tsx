import { PlaylistProvider } from './PlaylistContext/PlaylistProvider'

export const ContextProvider = ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement => {
  return <PlaylistProvider>{children}</PlaylistProvider>
}
