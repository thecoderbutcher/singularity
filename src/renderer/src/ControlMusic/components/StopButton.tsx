import { HiStop } from 'react-icons/hi2'
export function StopButton(): React.JSX.Element {
  return (
    <button className="w-full p-1 lg:p-2 border border-secondary text-secondary flex justify-center items-center hover:text-primary hover:bg-accent hover:border-accent rounded-md hover:scale-110 transition-all duration-200">
      <HiStop />
    </button>
  )
}
