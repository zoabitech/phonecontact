import React from 'react'
import styles from './styles.module.css';
const PreviewContant = ({ contact, onPreviewClicked }) => {
    return (
        <div className={styles.previewmainContainer}>
            <div>
                <button
                    type="button"
                    onClick={(event) => onPreviewClicked(event, contact)}
                >
                    !
                </button>
            </div>
            <img src={contact.image} alt={contact.image} />
            <h3>{contact.fullName}</h3>
        </div>
    )
}

export default PreviewContant