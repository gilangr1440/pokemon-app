import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getPokemon } from "../../utils/apis/api";
import { PokemonType } from "../../utils/apis/type";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import Card from "../../components/Card";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [pokemonDatas, setPokemonDatas] = useState<PokemonType[]>([]);
  const [prevUrl, setPrevUrl] = useState<string>("");
  const [nextUrl, setNextUrl] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const offset = urlParams.get("offset");

  useEffect(() => {
    getPokemonData(Number(offset));
  }, [offset]);

  const getPokemonData = async (offset: number) => {
    try {
      const result = await getPokemon(offset);
      setPokemonDatas(result.results);
      setPrevUrl(result.previous);
      setNextUrl(result.next);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = () => {
    navigate(`?offset=${prevUrl !== null ? Number(prevUrl.split("=")[1].split("&")[0]) : 0}`);
  };

  const handleNextPage = () => {
    navigate(`?offset=${Number(nextUrl.split("=")[1].split("&")[0])}`);
  };

  const handelDetail = (name: string) => {
    navigate(`/detail/${name}`);
  };
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-3 p-3">
        {pokemonDatas &&
          pokemonDatas.map((data: PokemonType, index: number) => {
            const pokemonIndex = data.url.split("/")[data.url.split("/").length - 2];
            return <Card key={index} onClick={() => handelDetail(data.name)} name={data.name} index={pokemonIndex} />;
          })}
      </div>
      <div className="flex justify-around my-5">
        <button onClick={() => handlePrevPage()} className={`text-2xl ${offset == "0" && "opacity-0 cursor-auto"}`}>
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
