import { create } from "zustand";

interface Playlist {
    id: number;
    name: string;
    description?: string;
}

interface PlaylistStore {
    playlists: Playlist[];
    setPlaylists: (playlists: Playlist[]) => void;
    addPlaylist: (playlist: Playlist) => void;
    removePlaylist: (id: number) => void;
    updatePlaylist: (id: number, playlist: Partial<Playlist>) => void;
    playlistSelectedId: number;
    setPlaylistSelectedId: (id: number) => void; 
    playlistSelectedName: string;
    setPlaylistSelectedName:(name:string) => void;
}

const usePlaylistStore = create<PlaylistStore>((set) => ({
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
    playlistSelectedId: 0,
    setPlaylistSelectedId: (id:number) => set({ playlistSelectedId: id }), 
    playlistSelectedName: "DEFAULT",
    setPlaylistSelectedName:(name:string) => set({ playlistSelectedName: name })

}))

export default usePlaylistStore