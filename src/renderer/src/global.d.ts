export {};

declare global {
  interface Window {
    electronAPI: {
      minimize: () => void;
      maximize: () => void;
      close: () => void;
    };
  }
}
