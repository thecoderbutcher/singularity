export {}
interface SongMetadata {
  title?: string
  artist?: string
  album?: string
  duration?: number
  cover?: string
}

declare global {
  interface Window {
    electronAPI: {
      getAudio: (path: string) => Promise<string>
      readMetadata: (path: string) => Promise<SongMetadata>
      openFile: () => Promise<string | null>
      minimize: () => void
      maximize: () => void
      close: () => void
    }
  }
}
