import React from "react";
import GalleryImage from "../galleryImage/GalleryImage";

interface Image {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
}

export default function Gallery({ images }: { images: Image[] }) {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:py-12 sm:px-6 lg:max-w-full lg:mx-16 lg:px-8">
      <div className=" grid gap-y-2 gap-x-2 grid-cols-3 xl:grid-cols-5">
        {images.map((image) => (
          <GalleryImage key={image.id} image={image} admin={false} />
        ))}
      </div>
    </div>
  );
}
