import { useShallow } from "zustand/react/shallow";
import Layout from "../../components/Layout";
import { usePokemonStore } from "../../utils/stores/pokemon-store";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { PokedexType } from "../../utils/types/api";

const Pokedex = () => {
  const [pokemon, deletePokemon] = usePokemonStore(useShallow((state) => [state.pokemon, state.deletePokemon]));
  const navigate = useNavigate();
  console.log(pokemon);

  const handelDetail = (name: string) => {
    navigate(`/detail/${name}`);
  };
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-3 p-3">
        {pokemon &&
          pokemon.map((data: PokedexType, index: number) => {
            return <Card key={index} page="pokedex" onClick={() => handelDetail(data.name)} name={data.name} index={String(data.id)} />;
          })}
      </div>
    </Layout>
  );
};

export default Pokedex;
