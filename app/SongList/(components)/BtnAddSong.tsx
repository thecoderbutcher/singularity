'use client'
import { useState } from "react";
import { PiMusicNotesPlusFill} from "react-icons/pi";
import ModalAddSong from "./ModalAddSong";
 

const BtnAddSong = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <button 
        className="border border-accent/80 text-accent px-2 py-1 rounded-md hover:bg-accent hover:text-primary hover:scale-125 transition-all duration-200"
        onClick={openModal}
      >
        <PiMusicNotesPlusFill />
      </button>
      <ModalAddSong isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default BtnAddSong