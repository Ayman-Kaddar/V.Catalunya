import ciudades from "@/utils/ciudades.json"
import { useState } from "react";

const Hero = () => {
  const [selectedCiudad, setSelectedCiudad] = useState(null);

  const handleCiudadClick = (ciudad) => {
    setSelectedCiudad(ciudad);
  };

  const closeAll = () => {
    setSelectedCiudad(null); // Cambiado a null en lugar de false
  };

  return (
    <div className="flex flex-col w-auto mx-auto justify-start items-center font-notosans">
      <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 items-center md:items-start">
        <div className="flex flex-col w-auto h-auto font-bold text-4xl py-4">
        Embárcate en una Aventura Inolvidable: Descubre los 51 Destinos Imperdibles en Cataluña
        </div>
        <div className="flex flex-col w-full text-lg md:text-xl text-justify gap-2">
          {ciudades.map((ciudad) => (
            <div className="flex flex-col w-auto h-auto items-center gap-2" key={ciudad.id}>
              <div className="flex w-auto h-auto font-bold text-3xl py-2">{ciudad.nombre}</div>
              <img
                src={ciudad.image}
                alt="image_logo"
                className="flex w-auto h-auto md:w-[700px] rounded-2xl "
              />
              <div className="flex w-auto h-auto text-lg">{ciudad.descripcion}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
