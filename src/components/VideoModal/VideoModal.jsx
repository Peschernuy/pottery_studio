import './videoModal.scss'
import closeBtn from "../../assets/images/classes/closeBtn.svg";

const VideoModal = ({ isOpen, onClose, children }) => {
  return (
    <div className="video__modal" style={{ display: isOpen ? "block" : "none" }}>
      <div className="video__modal--content">{children}</div>
      <button className="video__modal--close" onClick={onClose}>
        <img src={closeBtn} alt="close video btn" />
      </button>
    </div>
  );
};

export default VideoModal;