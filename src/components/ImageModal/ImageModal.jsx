import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    if (!isOpen) return null;
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal"
        >
            {image && (
                <div>
                    <img
                    src={image.urls.full}
                    alt={image.description}
                />
                <div>
                    <p>Author: {image.user.name}</p>
                    <p>Description: {image.description}</p>
                    <p>Likes {image.likes}</p>
                </div>
                </div>
            )}
        </Modal>
    );
}

export default ImageModal;