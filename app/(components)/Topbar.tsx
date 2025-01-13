
import { IoMenu } from "react-icons/io5";
const Topbar = () => {
  return (
    <div className="flex w-full h-[40px] justify-between items-center bg-accent px-4"> 
      <div className="flex h-full justify-center items-center text-2xl">
        <IoMenu/>
      </div>
      <div className="flex justify-center">
        <img src="/logo.webp" alt="Logo" className="w-20 p-3 bg-accent rounded-full "/>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-sm">username</p> 
        <div className="rounded-full">
          <img src="/default user.jpg" alt="" className="w-6 h-6 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Topbar