import React from 'react'
import styles from './styles.module.css';
const PreviewContant = ({ contact, onPreviewClicked }) => {
    return (
        <div className={styles.prevViewmainContainer}>
            <div className={styles.mainContactPrev}>
                <button
                    type="button"
                    onClick={(event) => onPreviewClicked(event, contact)}
                >
                    !
                </button>
                <img src={contact.image} alt={contact.image} />
                <h3>{contact.fullName}</h3>
            </div>
        </div>
    )
}

export default PreviewContant