import { NextRequest, NextResponse } from 'next/server'; 
import { prisma } from '@/lib/prisma'; 
import path from 'path';
import fs from "fs";

export async function GET(){
    try {
        const userId = 1;
        const playlists = await prisma.playlist.findMany({ where: {userId,}});
        return NextResponse.json(playlists, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: 'Failed to fetch playlists', details: error.message }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, description, userId } = body;
  
        if (!name || !userId) {
            return NextResponse.json({ error: 'Name and userId are required' }, { status: 400 });
        }
  
        const playlist = await prisma.playlist.create({
            data: {
                userId,
                name,
                description,
            },
        });
        
        // Create a directory for the playlist
        const playlistDir = path.join(process.cwd(), 'public', 'songs', playlist.name);
        if (!fs.existsSync(playlistDir)) {
            fs.mkdirSync(playlistDir);
        }

        return NextResponse.json(playlist, { status: 201 });

    } catch (error: any) {
        return NextResponse.json({ error: 'Failed to create playlist', details: error.message }, { status: 500 });
    }
}