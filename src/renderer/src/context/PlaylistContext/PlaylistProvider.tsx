import { useReducer } from 'react'
import { Action, initialState, PlaylistContext, State } from './PlaylistContext'

function playlistReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SELECT_PLAYLIST':
      return { ...state, playlistSelected: action.payload }
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.payload }
    case 'ADD_PLAYLISTS':
      return { ...state, playlists: [...state.playlists, action.payload] }
    case 'REMOVE_PLAYLISTS':
      return { ...state, playlists: state.playlists.filter((p) => p.id !== Number(action.payload)) }
    default:
      return state
  }
}
export const PlaylistProvider = ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement => {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, initialState)

  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  )
}
