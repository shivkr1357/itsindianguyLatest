import React from "react";
import styles from "@/styles/ImageModal.module.css"; // Create this CSS file to style the modal

const ImageViewModal = ({ imageUrl, onClose }: any) => {
   return (
      <div className={styles.imageViewerModal}>
         <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={onClose}>
               &times;
            </span>
            <img
               className={styles.imgClass}
               src={imageUrl}
               alt='Enlarged Image'
            />
         </div>
      </div>
   );
};

export default ImageViewModal;
