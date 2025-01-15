import { NextRequest, NextResponse } from 'next/server'; 
import { prisma } from '@/lib/prisma'; 

export async function GET() {
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
        return NextResponse.json(playlist, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: 'Failed to create playlist', details: error.message }, { status: 500 });
    }
}