import { FC, MouseEventHandler } from "react";
import { IoClose } from "react-icons/io5";

interface CardProps {
  name: string;
  index: string;
  page: string;
  onClick: MouseEventHandler<HTMLElement>;
}

const Card: FC<CardProps> = ({ name, index, page, onClick }) => {
  return (
    <>
      {page === "home" ? (
        <div key={index} onClick={onClick} className="flex flex-col items-center border-4 border-black rounded-xl shadow-lg cursor-pointer">
          <div className="flex h-full w-full items-center justify-center">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`} alt={name} width={170} height={200} className="h-auto w-auto" />
          </div>
          <h1 className="bg-black w-full text-white text-center text-xl">{name.toUpperCase()}</h1>
        </div>
      ) : page === "pokedex" ? (
        <div key={index} onClick={onClick} className="flex flex-col items-center relative border-4 border-black rounded-xl shadow-lg cursor-pointer">
          <div className="absolute right-2 top-2 text-black hover:text-gray-700 text-3xl">
            <IoClose />
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`} alt={name} width={170} height={200} className="h-auto w-auto" />
          </div>
          <h1 className="bg-black w-full text-white text-center text-xl">{name.toUpperCase()}</h1>
        </div>
      ) : null}
    </>
  );
};

export default Card;
