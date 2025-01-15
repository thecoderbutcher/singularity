'use client'
import { HiLockClosed, HiTrash, HiOutlineSignal} from "react-icons/hi2";
import { PiListPlusBold } from "react-icons/pi";
import AddPlaylistModal from "./AddPlaylistModal";
import { useState } from "react";

const ControlPlaylist = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="flex justify-end w-full px-4 items-center gap-2">
            <div 
                className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200"
                onClick={openModal}
            >
                <PiListPlusBold />
            </div>
            <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
                <HiLockClosed />
            </div>
            <div className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200">
                <HiTrash />
            </div>
            <AddPlaylistModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default ControlPlaylist