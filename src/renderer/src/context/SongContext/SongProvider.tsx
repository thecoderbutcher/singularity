import { useReducer } from 'react'
import { Action, initialState, SongContext, State } from './SongContext'

function SongReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SELECT_SONG':
      return { ...state, songSelected: action.payload }
    case 'SET_SONGS':
      return { ...state, songs: action.payload }
    case 'ADD_SONGS':
      return { ...state, songs: [...state.songs, action.payload] }
    case 'REMOVE_SONGS':
      return { ...state, songs: state.songs.filter((p) => p.id !== Number(action.payload)) }
    default:
      return state
  }
}
export const SongProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [songState, songDispatch] = useReducer(SongReducer, initialState)

  return <SongContext.Provider value={{ songState, songDispatch }}>{children}</SongContext.Provider>
}
