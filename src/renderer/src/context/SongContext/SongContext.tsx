import { createContext } from 'react'
import { Song } from '@prisma/client'

export type State = {
  songSelected: Song | null
  songs: Song[]
}

export type Action =
  | { type: 'SELECT_SONG'; payload: Song }
  | { type: 'SET_SONGS'; payload: Song[] }
  | { type: 'ADD_SONGS'; payload: Song }
  | { type: 'REMOVE_SONGS'; payload: string }

export const initialState: State = {
  songSelected: null,
  songs: []
}

export const SongContext = createContext<{
  songState: State
  songDispatch: React.Dispatch<Action>
}>({ songState: initialState, songDispatch: () => undefined })
