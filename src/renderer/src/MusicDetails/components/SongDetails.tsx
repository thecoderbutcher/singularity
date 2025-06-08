import Cover from '../../assets/no-cover.jpg'
import { HiFolder, HiUser, HiPlay, HiDocument, HiViewColumns } from 'react-icons/hi2'

function SongDetails(): React.JSX.Element {
  return (
    <div className="flex flex-1 flex-col gap-2 mt-4">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="border-4 border-slate rounded-md ">
          <img src={Cover} alt="cover" className="object-cover" />
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <HiPlay className="text-accent text-sn lg:text-base" />
        <span className="text-secondary-dark overflow-hidden text-nowrap  text-sm lg:text-base">
          {'No song selected'}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <HiUser className="text-accent text-sn lg:text-base" />
        <span className="overflow-hidden text-nowrap  text-sm lg:text-base">
          {'No artist selected'}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <HiViewColumns className="text-accent text-sn lg:text-base" />
        <span className="overflow-hidden text-nowrap  text-sm lg:text-base">
          {'No album selected'}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <HiFolder className="text-accent text-sn lg:text-base" />
        <span className="overflow-hidden text-nowrap  text-sm lg:text-base">
          {'No path selected'}
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
