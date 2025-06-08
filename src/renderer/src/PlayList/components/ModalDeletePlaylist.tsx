import Modal from "@/app/(components)/Modal"
import { IoWarning } from "react-icons/io5";

interface DeletePlaylistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalDeletePlaylist: React.FC<DeletePlaylistModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div>
            <h2 className="flex justify-center items-center text-center gap-1 text-lg">
                <IoWarning className="text-yellow-500 text-2xl"/>
                <span>You want to delete this playlist?</span>
            </h2>
            <div className="flex justify-center items-center gap-8 pt-4">
                <button className="bg-secondary/80 text-primary hover:bg-accent hover:text-secondary rounded-md py-1 px-4 hover:scale-110 transition-all duration-300" onClick={onClose}>Delete</button>
                <button className="bg-primary-dark/50 text-secondary border border-secondary/20 hover:bg-accent-dark rounded-md py-1 px-4 hover:scale-110 transition-all duration-300" onClick={onClose}>Cancel</button>
            </div>
        </div>
    </Modal>
  )
}

export default ModalDeletePlaylist