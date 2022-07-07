import React from 'react'
import styles from './styles.module.css';
const PreviewContant = ({ contact, onPreviewClicked }) => {
    return (
        <div className={styles.mainContainer}>
            <div>
                <button
                    type="button"
                    onClick={onPreviewClicked}
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