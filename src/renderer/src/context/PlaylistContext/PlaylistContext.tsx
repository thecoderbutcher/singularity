import { createContext } from 'react'
import { Playlist } from '@prisma/client'

export type State = {
  playlistSelected: Playlist | null
  playlists: Playlist[]
}

export type Action =
  | { type: 'SELECT_PLAYLIST'; payload: Playlist }
  | { type: 'SET_PLAYLISTS'; payload: Playlist[] }
  | { type: 'ADD_PLAYLISTS'; payload: Playlist }
  | { type: 'REMOVE_PLAYLISTS'; payload: string }

export const initialState: State = {
  playlistSelected: null,
  playlists: []
}

export const PlaylistContext = createContext<{
  state: State
  dispatch: React.Dispatch<Action>
}>({ state: initialState, dispatch: () => undefined })
