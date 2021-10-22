import React from 'react'
import ReactDOM from 'react-dom'
import './ReactCustomModal.scss'

// Mettre class optionnelles pour custom css

const ReactCustomModal = ({ type = 'text', label, value, onChange, ...props }) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-container modal-small">{props.children}</div>
        </div>,
        document.body
    )
}

export default ReactCustomModal
