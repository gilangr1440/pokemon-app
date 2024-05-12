import axios from "axios";
import { ResponsePayload, ResponsePayloadDetail } from "../types/api";
import { PokemonType } from "./type";

export const getPokemon = async (offset: number) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    return response.data as ResponsePayload<PokemonType[]>;
  } catch (error: any) {
    return error.response;
  }
};

export const getPokemonDetail = async (name: string | undefined) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.data as ResponsePayloadDetail;
  } catch (error: any) {
    return error.response;
  }
};
