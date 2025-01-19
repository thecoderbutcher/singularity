

import SearchSongs from "./(components)/SearchSongs";
import ListSongs from "./(components)/ListSongs";
import ControlSong from "./(components)/ControlSong";

const SongList = () => {
  return (
    <div className="col-span-7 flex flex-col p-4">
        <SearchSongs/>
        <ListSongs/>
        <ControlSong/>
    </div>
  )
}

export default SongList