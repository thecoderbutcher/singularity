import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma" 
import { parseBlob } from "music-metadata";
import path from 'path';
import fs from "fs";

export async function POST(req:Request){
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const playlistId = formData.get("playlistId") as string;
        const playlistName = formData.get("playlistName") as string;

        if(!file || !playlistId || !playlistName) return NextResponse.json({message:"Invalid data"},{status:400});

        const songPath = path.join(process.cwd(), "public", "songs", playlistName, file.name)
        const buffer = Buffer.from(await file.arrayBuffer());
        const metadata = await parseBlob(file);

        fs.writeFileSync(songPath, buffer);
 
        const newSong = await prisma.song.create({
            data:{
                title:metadata.common.title || "Unknown Title",
                artist: metadata.common.artist || "Unknown Artist",
                album: metadata.common.album || "Unknown Album",
                duration: metadata.format.duration || 0,
                path: `/songs/${playlistName}/${file.name}`
            }
        })
        const songId = await prisma.song.findFirst({
            where:{
                path: `/songs/${playlistName}/${file.name}`
            }
        })

        const newPlaylistSong = await prisma.playlistSong.create({
            data:{
                playlistId: parseInt(playlistId),
                songId:songId?.id || 1,
                position:1
            }
        })

        return NextResponse.json({message:"File uploaded successfully", song:newSong})

    } catch (error) {
        console.log("Error uplading file:", error)
        return NextResponse.json({message:"Internal Server Error"}, {status:500})
    }
}