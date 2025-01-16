import { useState } from "react";
import Modal from "@/app/(components)/Modal" 
import usePlaylistsStore from "@/zustand/playlistStore"
import { IoAddCircleOutline } from "react-icons/io5";

interface AddPlaylistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalAddPlaylist: React.FC<AddPlaylistModalProps> = ({ isOpen, onClose }) => {
    const [playlistName, setPlaylistName] = useState("");
    const [playlistDescription, setPlaylistDescription] = useState("");
    const [userId, setUserId] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const addPlalist = usePlaylistsStore((state) => state.addPlaylist);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);  
        try {
            const name = playlistName
            const description = playlistDescription
            const response = await fetch("/api/playlist", {
                method: "POST",
                headers: { "Content-Type": "application/json",  },
                body: JSON.stringify({ userId, name, description }),
            }); 
            
            if(!response.ok) throw new Error("Error, playlist not create");
            
            const data = await response.json(); 
            onClose();
        }
        catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Error, playlist not create";
            setError(errorMessage);
        }
        finally {
            setLoading(false);
            addPlalist({ id: 1, name: playlistName, description: playlistDescription });
        }

        const form = e.target as HTMLFormElement; 
        form.reset();
    }

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-col gap-6 justify-center items-center">
            <h2 className="flex items-center gap-1 font-semibold text-lg">
                <IoAddCircleOutline className="text-accent-dark text-2xl"/>
                <span>Add new playlist</span> 
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4"> 
                <input 
                    type="text" 
                    name="playlistName" 
                    placeholder="Insert playlist name"
                    autoComplete="off"
                    required
                    onChange={(e) => setPlaylistName(e.target.value)}
                    className="rounded-lg outline-none px-4 py-1 w-full bg-secondary text-primary focus:outline-accent outline-1" 
                    />
                <input type="hidden" name="userId" value={1} />
                <textarea 
                    name="description" 
                    placeholder="Insert playlist description"
                    required
                    onChange={(e) => setPlaylistDescription(e.target.value)}
                    className="rounded-lg outline-none px-4 py-1 w-full bg-secondary text-primary focus:outline-accent outline-1"
                > 
                </textarea>
                <button 
                    type="submit"
                    className="bg-secondary/80 text-primary py-1 rounded-md hover:bg-accent hover:text-secondary hover:scale-110 transition-all duration-200"
                    >
                    Add playlist
                </button>
            </form>
        </div>
    </Modal>
  )
}

export default ModalAddPlaylist