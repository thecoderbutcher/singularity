import { create } from "zustand";

export interface Playlist {
    id: number;
    name: string;
    description?: string;
}

interface PlaylistStore {
    playlistSelected: Playlist;
    setPlaylistSelected: (playlist: Playlist) => void;

    playlists: Playlist[];
    setPlaylists: (playlists: Playlist[]) => void;
    addPlaylist: (playlist: Playlist) => void;
    removePlaylist: (id: number) => void;
    updatePlaylist: (id: number, playlist: Partial<Playlist>) => void;
}

const usePlaylistStore = create<PlaylistStore>((set) => ({
    playlistSelected: { id: 1, name: "DEFAULT", description: "DEFAULT PLAYLIST" },
    setPlaylistSelected: (playlist: Playlist) => set({ playlistSelected: playlist }),

    playlists: [],
    setPlaylists: (playlists: Playlist[]) => set({ playlists }),
    addPlaylist: (playlist) => set((state) => (
        { playlists: [...state.playlists, playlist] }
    )),
    removePlaylist: (id) => set((state) => (
        { playlists: state.playlists.filter((playlist) => playlist.id !== id) }
    )),
    updatePlaylist: (id, playlist) => set((state) => (
        { playlists: state.playlists.map((playlistUpdated) => playlistUpdated.id === id ? { ...playlistUpdated, ...playlist } : playlistUpdated) }
    )),
}))

export default usePlaylistStore