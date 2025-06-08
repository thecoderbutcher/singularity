function ListPlaylist(): React.JSX.Element {
  return (
    <div className="flex flex-col justify-start items-center gap-2 lg:gap-4 py-8 px-10 w-full flex-1">
      <button className="w-full text-xs lg:text-base flex justify-center items-center border border-secondary/20 rounded-md py-2 hover:bg-secondary-dark hover:text-primary hover:scale-110 transition-all duration-200 cursor-pointer bg-primary-dark/50 text-secondary">
        playlist.name
      </button>
      <button className="w-full text-xs lg:text-base flex justify-center items-center border border-secondary/20 rounded-md py-2 hover:bg-secondary-dark hover:text-primary hover:scale-110 transition-all duration-200 cursor-pointer bg-primary-dark/50 text-secondary">
        playlist.name
      </button>
    </div>
  )
}

export default ListPlaylist
