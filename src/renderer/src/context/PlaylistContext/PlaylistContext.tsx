import { createContext } from 'react'
import { Playlist } from '@prisma/client'

export type State = {
  playlists: Playlist[]
}

export type Action =
  | { type: 'SET_PLAYLISTS'; payload: Playlist[] }
  | { type: 'ADD_PLAYLISTS'; payload: Playlist }
  | { type: 'REMOVE_PLAYLISTS'; payload: string }

export const initialState: State = {
  playlists: []
}

export const PlaylistContext = createContext<{
  state: State
  dispatch: React.Dispatch<Action>
}>({ state: initialState, dispatch: () => undefined })
