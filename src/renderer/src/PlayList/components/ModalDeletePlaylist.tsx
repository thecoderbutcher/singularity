import Modal from '@renderer/components/Modal'
interface DeletePlaylistModalProps {
  onClose: () => void
}
export function ModalDeletePlaylist({ onClose }: DeletePlaylistModalProps): React.JSX.Element {
  return (
    <Modal isOpen onClose={onClose} action="danger" title="ELiminar lista">
      <div>
        <div className="flex justify-center items-center gap-8 pt-4">
          <button
            className="bg-secondary/80 text-primary hover:bg-accent hover:text-secondary rounded-md py-1 px-4 hover:scale-110 transition-all duration-300"
            onClick={onClose}
          >
            Delete
          </button>
          <button
            className="bg-primary-dark/50 text-secondary border border-secondary/20 hover:bg-accent-dark rounded-md py-1 px-4 hover:scale-110 transition-all duration-300"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalDeletePlaylist
