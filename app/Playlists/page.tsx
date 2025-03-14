import ControlPlaylist from "./(components)/ControlPlaylist";
import ListPlaylist from "./(components)/ListPlaylist";

const Playlists = () => { 
    return (
        <div className="col-span-2 border-l border-l-accent-dark flex flex-col justify-center items-center gap-6 py-4">
            <ListPlaylist />
            <ControlPlaylist />
        </div>
    )
}

export default Playlists