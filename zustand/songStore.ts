import {create} from "zustand";

interface Song{
    id:number;
    title: string;
    artist: string;
    album: string;
    duration: number;
}
 
interface SongStore{
    songSelected: Song;
    setSongSelected: (songSelected: Song) => void;

    songsOnPlaylist: Song[];
    setSongsOnPlaylist: (songsPlaylist: Song[]) => void;
}

const useSongStore = create<SongStore>((set) => ({
    songSelected: {id:0, title:"", artist:"", album:"", duration:0},
    setSongSelected: (song:Song) => set({songSelected:song}),
    songsOnPlaylist: [],
    setSongsOnPlaylist: (songsPlaylist:Song[]) => set({ songsOnPlaylist: songsPlaylist})
}))

export default useSongStore