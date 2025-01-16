import { useState } from "react";
import { PiListPlusBold } from "react-icons/pi";
import ModalAddPlaylist from "./ModalAddPlaylist";

const BtnAddPlaylist = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <div 
                className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200"
                onClick={openModal}
            >
                <PiListPlusBold />
            </div>
            <ModalAddPlaylist isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default BtnAddPlaylist