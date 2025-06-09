import {
  IoCloseOutline,
  IoAddCircleOutline,
  IoAlertCircleOutline,
  IoRemoveCircleOutline
} from 'react-icons/io5'

interface ModalProps {
  title: string
  action: string
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ title, action, children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Contenedor de la Modal */}
      <div className="bg-primary/80 w-96 rounded-lg shadow-lg shadow-accent-dark/20 p-6 relative">
        {/* Botón para cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-accent text-xl hover:scale-110 transition-all duration-200"
        >
          <IoCloseOutline />
        </button>
        <h2 className="flex justify-center items-center text-center gap-1 text-lg mb-4">
          {action === 'add' && <IoAddCircleOutline className="text-accent-dark text-2xl" />}
          {action === 'warning' && <IoAlertCircleOutline className="text-yellow-500 text-2xl" />}
          {action === 'danger' && <IoRemoveCircleOutline className="text-red-500 text-2xl" />}
          <span className="font-semibold">{title}</span>
        </h2>
        {children}
      </div>
    </div>
  )
}

export default Modal
