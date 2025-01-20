import {create} from "zustand";

interface Song{
    id:number;
    title: string;
    artist: string;
    album: string;
    duration: number;
    path: string
}
 
interface SongStore{
    songSelected: Song;
    setSongSelected: (songSelected: Song) => void;

    songsOnPlaylist: Song[];
    setSongsOnPlaylist: (songsPlaylist: Song[]) => void;

    addSongOnPlaylist: (song:Song) => void
}

const useSongStore = create<SongStore>((set) => ({
    songSelected: {id:0, title:"", artist:"", album:"", duration:0, path:""},
    setSongSelected: (song:Song) => set({songSelected:song}),
    songsOnPlaylist: [],
    setSongsOnPlaylist: (songsPlaylist:Song[]) => set({ songsOnPlaylist: songsPlaylist}),
    addSongOnPlaylist: (song:Song) => set((state) => ({ songsOnPlaylist: [...state.songsOnPlaylist, song] }))
}))

export default useSongStore