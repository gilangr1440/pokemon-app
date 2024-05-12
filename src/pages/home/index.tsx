import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getPokemon } from "../../utils/apis/api";
import { PokemonType } from "../../utils/apis/type";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import Card from "../../components/Card";

const Home = () => {
  const [pokemonDatas, setPokemonDatas] = useState<PokemonType[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    getPokemonData(offset);
  }, [offset]);
  const getPokemonData = async (offset: number) => {
    try {
      const result = await getPokemon(offset);
      setPokemonDatas(result.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = () => {
    if (offset !== 0) {
      setOffset((prev) => prev - 20);
    }
  };
  const handleNextPage = () => {
    setOffset((prev) => prev + 20);
  };
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-3">
        {pokemonDatas &&
          pokemonDatas.map((data: PokemonType, index: number) => {
            const pokemonIndex = data.url.split("/")[data.url.split("/").length - 2];
            return <Card key={index} name={data.name} index={pokemonIndex} />;
          })}
      </div>
      <div className="flex justify-around my-5">
        <button onClick={() => handlePrevPage()} className={`text-2xl ${offset == 0 && "opacity-0"}`}>
          <GrCaretPrevious />
        </button>
        <button onClick={() => handleNextPage()} className="text-2xl">
          <GrCaretNext />
        </button>
      </div>
    </Layout>
  );
};

export default Home;
