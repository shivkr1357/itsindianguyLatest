import React from "react";
import styles from "@/styles/ImageModal.module.css"; // Create this CSS file to style the modal
import Image from "next/image";

const ImageViewModal = ({ imageUrl, onClose }: any) => {
   return (
      <div className={styles.imageViewerModal}>
         <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={onClose}>
               &times;
            </span>
            <Image
               className={styles.imgClass}
               src={imageUrl}
               width={450}
               height={450}
               alt='Enlarged Image'
            />
         </div>
      </div>
   );
};

export default ImageViewModal;
