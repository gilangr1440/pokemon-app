import { FC, MouseEventHandler } from "react";

interface CardProps {
  name: string;
  index: string;
  onClick: MouseEventHandler<HTMLElement>;
}

const Card: FC<CardProps> = ({ name, index, onClick }) => {
  return (
    <div key={index} onClick={onClick} className="flex flex-col items-center border-4 border-black rounded-xl shadow-lg cursor-pointer">
      <div className="flex h-full w-full items-center justify-center">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`} alt={name} width={170} height={200} className="h-auto w-auto" />
      </div>
      <h1 className="bg-black w-full text-white text-center text-xl">{name.toUpperCase()}</h1>
    </div>
  );
};

export default Card;
