export {}

declare global {
  interface Window {
    electronAPI: {
      openFile: () => Promise<string | null>
      minimize: () => void
      maximize: () => void
      close: () => void
    }
  }
}
