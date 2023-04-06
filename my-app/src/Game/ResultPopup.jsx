import React from "react";

function ResultPopup({ isOpen, onClose, kqWin }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
      >
        <div className="modal-dialog modal-background">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-center">Kết quả:</h5>
              <button className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <p className="text-center ketqua">{kqWin}</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show" />
    </>
  );
}

export default ResultPopup;
