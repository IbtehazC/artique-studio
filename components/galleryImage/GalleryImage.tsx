import React, { useState } from "react";
import Image from "next/image";
import EditForm from "../editForm/EditForm";

interface Props {
  image: { id: string; title: string; description: string; imgSrc: string };
  admin: boolean;
}

export default function GalleryImage({ image, admin }: Props) {
  const [loading, setLoading] = useState(true);

  const [editMode, setEditMode] = useState(false);
  return (
    <a href="#" className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
        <Image
          src={`${image.imgSrc}`}
          alt="placeholder"
          layout="fill"
          objectFit="cover"
          className={`group-hover:opacity-75 duration-700 ease-in-out ${
            loading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      {admin && (
        <div className="flex justify-around">
          <button
            key={image.id}
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => setEditMode(!editMode)}
          >
            Edit
          </button>
          <button
            key={image.id}
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => setEditMode(!editMode)}
          >
            Delete
          </button>
        </div>
      )}
      {editMode && <EditForm title={image.title} description={image.description} />}
    </a>
  );
}
