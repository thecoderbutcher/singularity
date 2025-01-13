import {
    createPlaylist,
} from '@/app/Playlists/service/playlist.service';

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        try {
            const { userId, name, description } = req.body;
            const playlist = await createPlaylist(userId, name, description);
            res.status(201).json(playlist);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
    else{
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}