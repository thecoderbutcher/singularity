import Footer from './components/Footer'
import Header from './components/Header'
import ControlMusic from './ControlMusic/ControlMusic'
import MusicDetails from './MusicDetails/MusicDetails'
import PlayList from './PlayList/PlayList'
import SongList from './SongList/SongList'

function App(): React.JSX.Element {
  return (
    <main className="flex flex-col w-full h-screen bg-primary/70 overflow-auto">
      <Header />
      <div className="grid flex-1 grid-cols-12 overflow-auto">
        <MusicDetails />
        <SongList />
        <PlayList />
      </div>
      <ControlMusic />
      <Footer />
    </main>
  )
}

export default App
