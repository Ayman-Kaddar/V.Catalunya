"use client";
import { useState } from "react";

const CiudadCard = ({ ciudad }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <img
        src={ciudad.image}
        alt={ciudad.alt}
        className="w-full h-64 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl text-center mb-2 text-primary-700">
          {ciudad.nombre}
        </h2>
        <p className="text-base text-gray-700">
          {showFullDescription
            ? ciudad.descripcion
            : `${ciudad.descripcion.slice(
                0,
                ciudad.descripcion.length / 2
              )}...`}
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleToggleDescription}
            className="mt-4 px-4 py-2 bg-primary-700 text-black rounded-full border-[1px] border-black cursor-pointer transition duration-300 active:scale-95"
          >
            {showFullDescription ? "Ocultar" : "Saber más"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CiudadCard;
