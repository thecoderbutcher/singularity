import fg from 'fast-glob'
import path from 'path'
import fs from 'fs'
import { parseFile } from 'music-metadata'

export type AudioFile = {
  title: string
  filePath: string
  duration: number
}

export async function scanMusicFolder(folderPath: string): Promise<AudioFile[]> {
  const files = await fg(['**/*.mp3'], { cwd: folderPath, absolute: true })

  const results: AudioFile[] = []

  for (const filePath of files) {
    try {
      const metadata = await parseFile(filePath)
      results.push({
        title: path.basename(filePath),
        filePath,
        duration: Math.floor(metadata.format.duration || 0)
      })
    } catch (e) {
      console.error(`Error leyendo ${filePath}`, e)
    }
  }

  return results
}
