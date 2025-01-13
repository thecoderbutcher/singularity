import { parseBuffer } from "music-metadata";
import { songs } from '../../constants/index'
export const metadataSong = async(filesong: File) => {

    const buffer = Buffer.from(songs[0].url, 'base64');
    const metadata = await parseBuffer(buffer);
    return metadata
}