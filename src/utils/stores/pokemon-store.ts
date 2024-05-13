import { create } from "zustand";
import { ResponsePayloadDetail } from "../types/api";
import { persist } from "zustand/middleware";

const pokemonStore = (set: any) => ({
  pokemon: [],
  addPokemon: (data: ResponsePayloadDetail) => {
    set((state: any) => ({
      pokemon: [...state.pokemon, data],
    }));
  },
  deletePokemon: (data: ResponsePayloadDetail[]) => {
    set({
      pokemon: [...data],
    });
  },
});

export const usePokemonStore = create(
  persist(pokemonStore, {
    name: "pokemon-store",
  })
);
