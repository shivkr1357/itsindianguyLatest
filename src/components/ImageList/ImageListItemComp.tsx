import { ImageListItem, ImageList, useMediaQuery } from "@mui/material";

import React, { Fragment, useState } from "react";
import ImageViewModal from "../ImageViewComponent/ImageViewModal";

const ImageListItemComp = ({ itemData }: any) => {
   const [showModal, setShowModal] = useState(false);
   const [selectedImage, setSelectedImage] = useState("");

   const handleImageClick = (imageUrl: any) => {
      setSelectedImage(imageUrl);
      setShowModal(true);
   };

   const handleCloseModal = () => {
      setShowModal(false);
   };

   const sxScreen = useMediaQuery("(max-width:480px)");
   const mdScreen = useMediaQuery("(max-width:720px)");
   const lgScreen = useMediaQuery("(max-width:1080px)");
   const exLgScreen = useMediaQuery("(max-width:1280px)");
   const xxLgScreen = useMediaQuery("(max-width:1400px)");

   console.log(
      "sx Screen",
      sxScreen,
      mdScreen,
      lgScreen,
      exLgScreen,
      xxLgScreen
   );

   let cols;
   if (sxScreen) {
      cols = 1;
   } else if (mdScreen) {
      cols = 2;
   } else if (lgScreen) {
      cols = 3;
   } else if (exLgScreen) {
      cols = 3;
   } else if (xxLgScreen) {
      cols = 4;
   } else {
      cols = 5;
   }

   return (
      <Fragment>
         <ImageList variant='quilted' cols={cols}>
            {itemData.map((item: any, key: any) => (
               <ImageListItem key={key}>
                  <img
                     style={{
                        width: 250,
                        height: 250,
                        margin: "20px",
                        marginBottom: "50px",
                        cursor: "pointer",
                        border: "1px solid gray",
                     }}
                     src={`/memes/${item} `}
                     alt={"Memes"}
                     loading='lazy'
                     onClick={() => handleImageClick(`/memes/${item} `)}
                  />
               </ImageListItem>
            ))}
         </ImageList>

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
