'use client'
 
import { useEffect, useState  } from "react"
import usePlaylistsStore from "@/zustand/playlistStore"
import useSongStore from "@/zustand/songStore";

const ListPlaylist = () => {
    const [loading, setLoading] = useState(true);
    
    const playlists = usePlaylistsStore((state) => state.playlists);
    const setPlaylists = usePlaylistsStore((state) => state.setPlaylists);

    const playlistSelected = usePlaylistsStore((state) => state.playlistSelected);
    const setPlaylistSelected = usePlaylistsStore((state) => state.setPlaylistSelected);  
    
    const selectPlaylist = (id: number, name:string, description?:string) => setPlaylistSelected({ id, name, description });  

    useEffect(() => {
        if (!playlists.length) {
            fetch('/api/playlist')
                .then((res) => {
                    if (!res.ok) throw new Error("Error fetching playlists");
                    return res.json();
                })
                .then((data) => {
                    setPlaylists(data); 
                    setLoading(false);  
                })
                .catch((error) => {
                    console.error("Error fetching playlists:", error);
                    setLoading(false); 
                });
        } else {  setLoading(false); }

    }, [playlists, setPlaylists]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <p>Loading playlists</p>  
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start items-center gap-6 py-8 px-10 w-full flex-1">  
            { playlists.map((playlist) => (    
                <button 
                    key={playlist.id} 
                    className={`w-full flex justify-center items-center border border-secondary/20 rounded-md py-2 hover:bg-secondary-dark hover:text-primary hover:scale-110 transition-all duration-200 cursor-pointer ${playlist.id == playlistSelected.id ? 'bg-secondary-dark text-primary-dark' : 'bg-primary-dark/50 text-secondary'}`}
                    onClick={() => {selectPlaylist(playlist.id, playlist.name, playlist.description)}}
                >
                    {playlist.name} 
                </button>
            ))}
        </div>
    )
}

export default ListPlaylist