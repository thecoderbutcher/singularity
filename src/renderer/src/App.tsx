import Footer from './components/Footer'
import Header from './components/Header'
import ControlMusic from './ControlMusic/ControlMusic'
import SongList from './SongList/SongList'

function App(): React.JSX.Element {
  return (
    <main className="flex flex-col w-full h-screen bg-primary/70 rounded-2xl">
      <Header />
      <div className="grid flex-1 grid-cols-12">
        <SongList />
      </div>
      <ControlMusic />
      <Footer />
    </main>
  )
}

export default App
