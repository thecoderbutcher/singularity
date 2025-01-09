import { HiLockClosed, HiTrash, HiOutlineSignal, HiDocumentPlus} from "react-icons/hi2";

const Plaulists = () => {
  return (
    <div className="col-span-2 border-l border-l-accent-dark  flex flex-col justify-start items-center gap-6 py-4">
        <div className="flex flex-col justify-start items-center gap-6 py-8 px-10 w-full flex-1"> 
            <div className="w-full flex justify-center items-center bg-secondary-dark text-primary rounded-md py-2">
                DEFAULT
            </div>
            <div className="w-full flex justify-center items-center bg-primary-dark/50 text-secondary border border-secondary/20 rounded-md py-2 hover:bg-secondary-dark hover:text-primary hover:scale-110 transition-all duration-200">
                some playlist no selected
            </div>
            <div className="w-full flex justify-center items-center bg-primary-dark/50 text-secondary border border-secondary/20 rounded-md py-2 hover:bg-secondary-dark hover:text-primary hover:scale-110 transition-all duration-200">
                some playlist no selected
            </div>
            <div className="w-full flex justify-center items-center bg-primary-dark/50 text-secondary border border-secondary/20 rounded-md py-2 hover:bg-secondary-dark hover:text-primary hover:scale-110 transition-all duration-200">
                some playlist no selected
            </div>
            <div className="w-full flex justify-center items-center bg-primary-dark/50 text-secondary border border-secondary/20 rounded-md py-2 hover:bg-secondary-dark hover:text-primary hover:scale-110 transition-all duration-200">
                some playlist no selected
            </div>
            <div className="w-full flex justify-center items-center bg-primary-dark/50 text-secondary border border-secondary/20 rounded-md py-2 hover:bg-secondary-dark hover:text-primary hover:scale-110 transition-all duration-200">
                some playlist no selected
            </div>
        </div>
        <div className="flex justify-center items-center gap-4">
            <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-105 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
                <HiDocumentPlus />
            </div>
            <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-105 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
                <HiOutlineSignal />
            </div>
            <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-105 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
                <HiLockClosed />
            </div>
            <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-105 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
                <HiTrash />
            </div>
        </div>
    </div>
  )
}

export default Plaulists