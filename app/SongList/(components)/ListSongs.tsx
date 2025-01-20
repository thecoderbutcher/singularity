'use client'

import { useEffect, useState } from "react"
import useSongStore from "@/zustand/songStore"
import usePlaylistStore from "@/zustand/playlistStore"
import { error } from "console"

const ListSongs = () => {
    const songOnPlaylist = useSongStore((state) => state.songsOnPlaylist)
    const setSongsOnPlaylist = useSongStore((state) => state.setSongsOnPlaylist)
    const playlistSelectedId = usePlaylistStore((state) => state.playlistSelectedId)
    const playlistSelectedName = usePlaylistStore((state) => state.playlistSelectedName)

    useEffect(() => {   
        fetch(`/api/song?playlistId=${playlistSelectedId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => { 
            if(!res.ok) throw new Error("Error fetching songs")
            return res.json()
        })
        .then((data) => { 
            setSongsOnPlaylist(data);
        })
        .catch((error) => {
            console.error("Error to load songs", error);
        }) 
    },[playlistSelectedName, playlistSelectedId])

    if(songOnPlaylist.length < 1){
        return (
            <div className="flex w-full h-full justify-center items-center text-secondary/60 text-xl cursor-default">
                No music on this playlist
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-1 justify-center p-12">
            <div className="flex flex-col">
                {songOnPlaylist.map((song) => (
                    <div key={song.id} className="flex justify-between items-center rounded-md pl-2 py-1 hover:bg-accent-dark hover:text-secondary hover:scale-105 transition-all duration-200 cursor-pointer">
                        <p className="flex items-center"> 
                            <span className="w-1 h-1 bg-secondary-dark rounded-full"></span>
                            <span className="pl-4">{song.title} - {song.artist}</span>
                        </p>
                        <p className="pr-2">{Math.floor(Math.floor(song.duration)/60)}:{Math.floor(song.duration)%60}</p>
                    </div>
                ))} 
            </div>

            
            {/* <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between w-full py-2 px-2 text-lg text-accent-dark items-center border-b border-b-accent-dark">
                        <p className="flex items-center gap-2 font-bold">
                            <span className="w-1 h-1 bg-accent rounded-full"></span> 
                            Folder name
                        </p>
                        <p>total time / total song</p>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex w-full justify-between items-center rounded-md pl-2 hover:bg-accent-dark hover:text-secondary hover:scale-105 transition-all duration-200 cursor-pointer ">
                            <p className="flex items-center"> 
                                <span className="w-1 h-1 bg-secondary-dark rounded-full"></span>
                                <span className="pl-6">Song name - Artists name</span>
                            </p>
                            <p className="pr-2">total time</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ListSongs