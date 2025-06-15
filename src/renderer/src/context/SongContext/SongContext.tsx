import { createContext } from 'react'
import { Song } from '@prisma/client'

export type State = {
  songSelected: Song | null
  songPlaying: Song | null
  audio: HTMLAudioElement | null
  isPlaying: boolean
  songs: Song[]
}

export type Action =
  | { type: 'SELECT_SONG'; payload: Song }
  | { type: 'PLAY_SONG'; payload: Song }
  | { type: 'SET_PLAY'; payload: boolean }
  | { type: 'SET_AUDIO'; payload: HTMLAudioElement }
  | { type: 'SET_SONGS'; payload: Song[] }
  | { type: 'ADD_SONGS'; payload: Song }
  | { type: 'REMOVE_SONGS'; payload: string }

export const initialState: State = {
  songSelected: null,
  songPlaying: null,
  audio: null,
  isPlaying: false,
  songs: []
}

export const SongContext = createContext<{
  songState: State
  songDispatch: React.Dispatch<Action>
}>({ songState: initialState, songDispatch: () => undefined })
