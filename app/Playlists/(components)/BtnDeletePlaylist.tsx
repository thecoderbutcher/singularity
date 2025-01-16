import { useState } from "react";
import { HiTrash } from "react-icons/hi2";
import ModalDeletePlaylist from "./ModalDeletePlaylist";

const BtnDeletePlaylist = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <div 
                className="flex items-center justify-center border border-accent text-accent p-1 text-base hover:scale-125 hover:text-primary hover:bg-accent rounded-md transition-all duration-200"
                onClick={openModal}
            >
                <HiTrash />
            </div>
            <ModalDeletePlaylist isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default BtnDeletePlaylist