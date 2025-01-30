"use client";
import React, { Fragment, useState } from "react";
import ImageViewModal from "../ImageViewComponent/ImageViewModal";
import Image from "next/image";

const ImageListItemComp = ({ itemData }: { itemData: string[] }) => {
   const [showModal, setShowModal] = useState(false);
   const [selectedImage, setSelectedImage] = useState("");

   const handleImageClick = (imageUrl: string) => {
      setSelectedImage(imageUrl);
      setShowModal(true);
   };

   const handleCloseModal = () => {
      setShowModal(false);
   };

   // Responsive grid columns
   const getGridCols = () => {
      if (typeof window === "undefined") return "grid-cols-1";
      const width = window.innerWidth;
      if (width <= 480) return "grid-cols-1";
      if (width <= 720) return "grid-cols-2";
      if (width <= 1080) return "grid-cols-3";
      if (width <= 1280) return "grid-cols-3";
      if (width <= 1400) return "grid-cols-4";
      return "grid-cols-5";
   };

   return (
      <Fragment>
         <div className={`grid gap-4 ${getGridCols()}`}>
            {itemData.map((item, key) => (
               <div key={key} className="flex justify-center">
                  <Image
                     className="w-[250px] h-[250px] m-5 mb-[50px] cursor-pointer border border-gray-300 hover:shadow-lg transition-shadow"
                     src={`/memes/${item}`}
                     alt="Memes"
                     loading="lazy"
                     onClick={() => handleImageClick(`/memes/${item}`)}
                     width={250}
                     height={250}
                  />
               </div>
            ))}
         </div>

         {showModal && (
            <ImageViewModal
               imageUrl={selectedImage}
               onClose={handleCloseModal}
            />
         )}
      </Fragment>
   );
};

export default ImageListItemComp;
