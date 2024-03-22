import ciudades from "@/utils/ciudades.json";
import CiudadCard from "../card/ciudadCard";

const Hero = () => {
  return (
    <div className=" font-notosans">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary-700 mb-8">
          Embárcate en una Aventura Inolvidable: Descubre los 51 Destinos
          Imperdibles en Cataluña
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ciudades.map((ciudad) => (
            <CiudadCard key={ciudad.id} ciudad={ciudad} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
