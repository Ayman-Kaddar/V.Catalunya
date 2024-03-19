import ciudades from "@/utils/ciudades.json";

const Hero = () => {
  return (
    <div className="flex flex-col items-center font-notosans">
      <div className="flex flex-col w-auto md:w-2/3 ">
        <div className="flex flex-col w-auto h-auto font-bold text-4xl py-4 text-center p-6">
          Embárcate en una Aventura Inolvidable: Descubre los 51 Destinos
          Imperdibles en Cataluña
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-8 p-4">
          {ciudades.map((ciudad) => (
            <div
              key={ciudad.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate hover:scale-105"
            >
              <img
                src={ciudad.image}
                alt={ciudad.nombre}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="flex flex-col w-auto h-auto p-4">
                <h2 className="flex flex-col font-bold text-2xl mb-2 text-center">
                  {ciudad.nombre}
                </h2>
                <p className="flex flex-col text-lg text-start">
                  {ciudad.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
