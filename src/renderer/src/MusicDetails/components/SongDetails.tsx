import { useSongs } from '@renderer/context/SongContext/SongHook'
import Cover from '../../assets/no-cover.jpg'
import { HiFolder, HiUser, HiPlay, HiDocument, HiViewColumns } from 'react-icons/hi2'

function SongDetails(): React.JSX.Element {
  const { songState } = useSongs()
  const songCover =
    !songState.songSelected?.cover || songState.songSelected?.cover === 'none'
      ? Cover
      : songState.songSelected?.cover
  return (
    <div className="flex flex-1 flex-col gap-2 py-2 px-4">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="border-2 border-accent rounded-lg">
          <img
            src={songCover}
            alt="cover"
            className=" w-[250px] h-[180px] rounded-md object-cover"
          />
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <HiPlay className="text-accent text-sn lg:text-base" />
        <span className="text-secondary-dark overflow-hidden text-nowrap text-sm lg:text-base">
          {songState.songSelected?.title || 'No song selected'}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <HiUser className="text-accent text-sn lg:text-base" />
        <span className="overflow-hidden text-nowrap  text-sm lg:text-base">
          {songState.songSelected?.artist || 'No artist selected'}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <HiViewColumns className="text-accent text-sn lg:text-base" />
        <span className="overflow-hidden text-nowrap  text-sm lg:text-base">
          {songState.songSelected?.album || 'No album selected'}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <HiFolder className="text-accent text-sn lg:text-base" />
        <span className="overflow-hidden text-nowrap  text-sm lg:text-base">
          {songState.songSelected?.path || 'No path selected'}
        </span>
      </div>
      <div className="flex gap-1 items-center w-full">
        <HiDocument className="text-accent text-sn lg:text-base" />
        <span className="overflow-hidden text-nowrap  text-sm lg:text-base">
          File metadata info
        </span>
      </div>
    </div>
  )
}

export default SongDetails
