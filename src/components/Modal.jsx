import "../css/Modal.css";

const Modal = ({ isOpen, onClose, titre, src, desciption }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="partie_gauche">
                    <button className="close-btn1" onClick={onClose}>
                        ✕
                    </button>
                    <h3>{titre}</h3>
                    <p className="description">{desciption}</p>
                    <button className="close-btn2" onClick={onClose}>
                        ✕ Fermer
                    </button>

                </div>
                <img className="img_modal" src={src} alt="" />
            </div>
        </div>
    );
};

export default Modal;