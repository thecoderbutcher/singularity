import { HiOutlineHeart, HiPencil, HiMinus, HiPlus, HiArrowsUpDown } from 'react-icons/hi2'

function ControlDetails(): React.JSX.Element {
  return (
    <div className="flex gap-2 justify-end items-center p-1 lg:p-2">
      <div className="border border-accent p-1 text-accent hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200">
        <HiPlus />
      </div>
      <div className="border border-accent p-1 text-accent hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200">
        <HiMinus />
      </div>
      <div className="border border-accent p-1 text-accent hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200">
        <HiOutlineHeart />
      </div>
      <div className="border border-accent p-1 text-accent hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200">
        <HiPencil />
      </div>
      <div className="border border-accent p-1 text-accent hover:text-primary hover:bg-accent hover:scale-125 rounded-md transition-all duration-200">
        <HiArrowsUpDown />
      </div>
    </div>
  )
}

export default ControlDetails
