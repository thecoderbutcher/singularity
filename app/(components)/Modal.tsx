import { IoCloseOutline } from "react-icons/io5";
interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({children, isOpen, onClose}) => {
    if (!isOpen) return null
    
    return (  
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            {/* Contenedor de la Modal */}
            <div className="bg-primary/80 w-96 rounded-lg shadow-lg shadow-accent-dark/20 p-6 relative">
                {/* Botón para cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-accent text-xl hover:scale-110 transition-all duration-200"
                    >
                    <IoCloseOutline />
                </button>
                {children}
            </div>
        </div>  
  );
};

export default Modal