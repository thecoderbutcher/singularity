import { create } from 'zustand';
import { Playlist } from './playlistStore';

interface CurrentPlaylist {
    id: string | null;
    playlist: Playlist | null;
    song: string | null;
    songs: string[] | null;
}

interface AudioStore {
    audio: HTMLAudioElement | null;
    playing: boolean;
    currentTime: number;
    currentPlaylist: CurrentPlaylist;

    setAudio: (audio: HTMLAudioElement | null) => void;
    setPlaying: (playing: boolean) => void;
    setCurrentTime: (currentTime: number) => void;
    setCurrentPlaylist: (currentPlaylist: CurrentPlaylist) => void;
}

const useAudioStore = create<AudioStore>((set) => ({
    audio: null,
    playing: false,
    currentTime: 0,
    currentPlaylist: {
        id: null,
        playlist: null,
        song: null,
        songs: null,
    },
    setAudio: (audio) => set({ audio }),
    setPlaying: (playing) => set({ playing }),
    setCurrentTime: (currentTime) => set({ currentTime }),
    setCurrentPlaylist: (currentPlaylist) => set({ currentPlaylist })
}));

export default useAudioStore;