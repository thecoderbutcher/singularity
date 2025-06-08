import { HiSpeakerWave, HiMiniSparkles } from 'react-icons/hi2'

function ControlProgress(): React.JSX.Element {
  return (
    <div className="col-span-7  2xl:col-span-8 flex flex-col justify-end">
      <div className="flex justify-between items-center">
        <div className="flex w-full py-1 gap-2 text-accent">
          <HiSpeakerWave />
          <div className="w-1/3 border-accent border-2 rounded-md">
            <div className="w-1/2 h-full bg-secondary-dark"></div>
          </div>
        </div>
        <div className="flex gap-2 text-primary items-center justify-center bg-accent px-2 py-1 rounded-t-md">
          <div>00:34</div>
          <div>
            <HiMiniSparkles />
          </div>
          <div>03:44</div>
        </div>
      </div>
      <div className="flex w-full border border-accent p-2 rounded-b-md">view progress</div>
    </div>
  )
}

export default ControlProgress
