import { use, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import usePlaylistsStore from "@/zustand/playlistStore"
import Modal from "@/app/(components)/Modal" 
import { parseBlob } from "music-metadata";

interface ModalAddSongProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalAddSong: React.FC<ModalAddSongProps> = ({ isOpen, onClose }) => {
    const playlistId = usePlaylistsStore((state) => state.playlistSelectedId);
    const playlistName = usePlaylistsStore((state)=> state.playlistSelectedName);
    const [audioSrc, setAudioSrc] = useState<string | null>(null);
    const [audioName, setAudioName] = useState<string | null>(null);
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
 
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && (file.type == 'audio/MP3'|| file?.type == 'audio/mpeg')) {
            setAudioSrc(URL.createObjectURL(file));
            setAudioFile(file)
            setAudioName(file.name); 
        }
        else{
            alert("Please select a mp3 file");
        }
    }

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        if(!audioFile || !playlistId){
            alert("Please select a file and playlist");
            return;
        }
        
        const formData = new FormData(); 
        formData.append("file", audioFile)
        formData.append("playlistId", playlistId.toString())
        formData.append("playlistName", playlistName)   
        
        setLoading(true)

        try{
            const response = await fetch("/api/song",{
                method:"POST",
                body:formData,
            })

            if(response.ok){
                setAudioFile(null)
                onClose()
            }
            else{
                const error = await response.json()                
            }
        } catch(error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}> 
            <h2 className="flex justify-center items-center text-center gap-1 text-lg mb-4">
                <IoAddCircleOutline className="text-accent-dark text-2xl"/>
                <span className="font-semibold">Add a song</span> 
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input 
                    type="file" 
                    name="file" 
                    id="file-input"
                    accept="audio/mp3"
                    required
                    onChange={handleFileChange} 
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
                        disabled={loading} 
                    >
                        {loading ? "Adding..." : "Add song"}
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