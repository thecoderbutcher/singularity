// src/renderer/components/ImportFolder.tsx
import { useState } from 'react'
import { scanFolder } from '../../lib/ipc'

export function ImportFolder() {
  const [songs, setSongs] = useState([])

  const handleSelectFolder = async () => {
    const folderPath = '/home/mirai/Música' // Más adelante lo hacemos dinámico
    const result = await scanFolder(folderPath)
    setSongs(result)
  }

  return (
    <div>
      <button onClick={handleSelectFolder}>Importar Carpeta</button>
      <ul>
        {songs.map((song: any, idx) => (
          <li key={idx}>
            {song.title} ({song.duration}s)
          </li>
        ))}
      </ul>
    </div>
  )
}
