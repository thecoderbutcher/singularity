import Modal from "@/app/(components)/Modal"
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
interface ModalAddSongProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalAddSong: React.FC<ModalAddSongProps> = ({ isOpen, onClose }) => {
    const [audioSrc, setAudioSrc] = useState<string | null>(null);
    const [audioName, setAudioName] = useState<string | null>(null);

    const handkeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAudioSrc(URL.createObjectURL(file));
            setAudioName(file.name); 
        }
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}> 
            <h2 className="flex justify-center items-center text-center gap-1 text-lg mb-4">
                <IoAddCircleOutline className="text-accent-dark text-2xl"/>
                <span className="font-semibold">Add a song</span> 
            </h2>
            <form action="" className="flex flex-col">
                <input 
                    type="file" 
                    name="file" 
                    id="file-input"
                    accept="audio/mp3"
                    onChange={handkeFileChange} 
                />
                {audioSrc && (
                    <div className="flex flex-col gap-4 mt-4">
                    <p className="flex gap-2 items-center overflow-hidden">Preview: {audioName}</p>
                        <audio controls src={audioSrc} className="w-full ">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}
                <div className="flex gap-8 mt-4 justify-center items-center ">
                    <button 
                        className="bg-secondary text-primary hover:bg-accent hover:text-secondary rounded-md py-1 px-4 hover:scale-110 transition-all duration-300"
                    >
                        Add song
                    </button>
                    <button 
                        className="bg-primary-dark/50 text-secondary border border-secondary/20 hover:bg-accent-dark rounded-md py-1 px-4 hover:scale-110 transition-all duration-300"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div> 
            </form>
        </Modal>
    )
}

export default ModalAddSong