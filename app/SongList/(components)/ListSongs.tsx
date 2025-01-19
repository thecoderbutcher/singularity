

const ListSongs = () => {
  return (
    <div className="flex flex-col gap-1 justify-center p-12">
        <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
                <div className="flex justify-between w-full py-2 px-2 text-lg text-accent-dark items-center border-b border-b-accent-dark">
                    <p className="flex items-center gap-2 font-bold">
                        <span className="w-1 h-1 bg-accent rounded-full"></span> 
                        Folder name
                    </p>
                    <p>total time / total song</p>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex w-full justify-between items-center rounded-md pl-2 hover:bg-accent-dark hover:text-secondary hover:scale-105 transition-all duration-200 cursor-pointer ">
                        <p className="flex items-center"> 
                            <span className="w-1 h-1 bg-secondary-dark rounded-full"></span>
                            <span className="pl-6">Song name - Artists name</span>
                        </p>
                        <p className="pr-2">total time</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex justify-between items-center rounded-md pl-2 hover:bg-accent-dark hover:text-secondary hover:scale-105 transition-all duration-200 cursor-pointer ">
                <p className="flex items-center"> 
                    <span className="w-1 h-1 bg-secondary-dark rounded-full"></span>
                    <span className="pl-4">Song name - Artists name</span>
                </p>
                <p className="pr-2">total time</p>
            </div>
        </div>
    </div>
  )
}

export default ListSongs