import "./modal.css";

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(event) => {
        event.stopPropagation()
      }} className="modal-container">
        <div className="modal-row">
          <h3>Connect Wallet</h3>
          <div className="modal-right-btn">
            <p onClick={onClose}>x</p>
          </div>
        </div>
        <hr className="line" />
        <div className="wallet">
          <p className="desc">Choose your preferred wallet</p>
          <div className="wallet-fox">
            <img src="../fox-wallet.png" />
            <img className="hide" src="../Down Chevron.svg" />
          </div>
          <div className="wallet-connect">
            <img  src="../connect-wallet.png" />
            <img className="hide" src="../Down Chevron.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
