import Modal from "@/app/(components)/Modal" 
import { useState } from "react";

interface AddPlaylistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddPlaylistModal: React.FC<AddPlaylistModalProps> = ({ isOpen, onClose }) => {
    const [playlistName, setPlaylistName] = useState("");
    const [playlistDescription, setPlaylistDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); 
        
        try {
            const response = await fetch("/createplaylist", {
                method: "POST",
                headers: { "Content-Type": "application/json",  },
                body: JSON.stringify({ playlistName, playlistDescription }),
            }); 
            
            if(!response.ok) throw new Error("Error, playlist not create");
            
            const data = await response.json();
            console.log(data);
            onClose();
        }
        catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Error, playlist not create";
            setError(errorMessage);
        }
        finally {
            setLoading(false);
        }

        const form = e.target as HTMLFormElement; 
        form.reset();
    }

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="font-semibold">Add new playlist</h2>
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
                    className="bg-secondary/80 text-primary  py-1 rounded-md hover:bg-accent hover:text-secondary hover:scale-110 transition-all duration-200"
                    >
                    Add playlist
                </button>
            </form>
        </div>
    </Modal>
  )
}

export default AddPlaylistModal