import "../css/Modal.css";

const Modal = ({ isOpen, onClose, titre, src ,desciption}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn1" onClick={onClose}>
                    ✕
                </button>
                <h2 >{titre}</h2>
                {/* Icon Divider*/}
                <div className="lines-star">
                    <div className="line"></div>
                    <div><i className="fas fa-star"></i></div>
                    <div className="line"></div>
                </div>
                <img className="img_modal" src={src} alt="" />
                <p className="description">{desciption}</p>
                <button className="close-btn2" onClick={onClose}>
                    ✕ Fermer
                </button>
            </div>
        </div>
    );
};

export default Modal;