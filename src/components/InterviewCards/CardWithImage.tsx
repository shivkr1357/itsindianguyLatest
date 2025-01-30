"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { imageLinksInterview } from "@/config/config";
import { useInView } from "react-intersection-observer";

const CardWithImage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleClick = (link: string) => {
    router.push(link);
  };

  const getImageSize = () => {
    if (typeof window === "undefined") return { width: 150, height: 150 };
    const width = window.innerWidth;
    const isHomePage = pathname === "/";

    if (width <= 600) {
      return { width: isHomePage ? 40 : 150, height: isHomePage ? 40 : 150 };
    }
    if (width <= 960) return { width: 100, height: 100 };
    if (width <= 1280) return { width: 150, height: 150 };
    return { width: 150, height: 150 };
  };

  const isHomePage = pathname === "/";
  const imageSize = getImageSize();
  const visibleItems = isHomePage 
    ? imageLinksInterview.slice(0, 
        window?.innerWidth <= 600 ? 5 : 
        window?.innerWidth <= 960 ? 6 : 
        imageLinksInterview.length
      )
    : imageLinksInterview;

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {visibleItems.map((image, index) => (
          <div
            key={index}
            ref={ref}
            className={`transform transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div
              onClick={() => handleClick(image.link)}
              className={`
                bg-white dark:bg-neutral-800 
                rounded-lg shadow-lg 
                cursor-pointer 
                transition-transform hover:-translate-y-1
                flex justify-center items-center
                ${isHomePage 
                  ? 'h-[50px] sm:h-[120px] md:h-[180px]' 
                  : 'h-[200px] sm:h-[180px] md:h-[220px]'
                }
              `}
            >
              <Image
                src={image.src}
                alt={image.label}
                width={imageSize.width}
                height={imageSize.height}
                className="object-contain p-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardWithImage;
