import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface ImageViewModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageViewModal = ({ imageUrl, onClose }: ImageViewModalProps) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-red-500 hover:text-red-600 transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
        </button>
        <Image
          src={imageUrl}
          alt="Enlarged view"
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default ImageViewModal;
