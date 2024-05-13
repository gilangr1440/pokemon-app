import { useShallow } from "zustand/react/shallow";
import Layout from "../../components/Layout";
import { usePokemonStore } from "../../utils/stores/pokemon-store";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { PokedexType } from "../../utils/types/api";

const Pokedex = () => {
  const [pokemon, deletePokemon] = usePokemonStore(useShallow((state) => [state.pokemon, state.deletePokemon]));
  const navigate = useNavigate();

  const handelDetail = (name: string) => {
    navigate(`/detail/${name}`);
  };

  const handleDeletePokemon = (id: number | undefined) => {
    const deletePoke = pokemon.filter((poke: PokedexType) => poke.id !== id);
    deletePokemon(deletePoke);
  };

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-3 p-3">
        {pokemon &&
          pokemon.map((data: PokedexType, index: number) => {
            return <Card key={index} page="pokedex" onClick={() => handelDetail(data.name)} onDelete={() => handleDeletePokemon(data.id)} name={data.name} alias={data.alias} index={String(data.id)} />;
          })}
      </div>
    </Layout>
  );
};

export default Pokedex;
