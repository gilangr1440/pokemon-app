export interface ResponsePayload<T = any> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface ResponsePayloadDetail {
  abilities?: [
    {
      ability?: {
        name?: string;
        url?: string;
      };
      is_hidden?: boolean;
      slot?: number;
    }
  ];
  alias?: string;
  base_experience?: number;
  cries?: {
    latest?: string;
    legacy?: string;
  };
  forms?: [
    {
      name?: string;
      url?: string;
    }
  ];
  game_indices?: [
    {
      game_index?: number;
      version?: {
        name?: string;
        url?: string;
      };
    }
  ];
  height?: number;
  held_items?: [];
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: [
    {
      move?: {
        name?: string;
        url?: string;
      };
      version_group_details?: [
        {
          level_learned_at?: number;
          move_learn_method?: {
            name?: string;
            url?: string;
          };
          version_group?: {
            name?: string;
            url?: string;
          };
        }
      ];
    }
  ];
  name?: string;
  order?: number;
  past_abilities?: [];
  past_types?: [];
  species?: {
    name?: string;
    url?: string;
  };
  sprites?: {
    back_default?: string;
    back_female?: string | null;
    back_shiny?: string;
    back_shiny_female?: string | null;
    front_default?: string;
    front_female?: string | null;
    front_shiny?: string;
    front_shiny_female?: string | null;
    other?: {
      dream_world?: {
        front_default?: string;
        front_female?: string | null;
      };
      home?: {
        front_default?: string;
        front_female?: string | null;
        front_shiny?: string;
        front_shiny_female?: string | null;
      };
      official_artwork?: {
        front_default?: string;
        front_shiny?: string;
      };
      showdown?: {
        back_default?: string;
        back_female?: string | null;
        back_shiny?: string;
        back_shiny_female?: string | null;
        front_default?: string;
        front_female?: string | null;
        front_shiny?: string;
        front_shiny_female?: string | null;
      };
    };
    versions: null;
  };
  stats?: [
    {
      base_stat?: number;
      effort?: number;
      stat?: {
        name?: string;
        url?: string;
      };
    }
  ];
  types?: [
    {
      slot?: number;
      type?: {
        name?: string;
        url?: string;
      };
    }
  ];
  weight?: number;
}

export interface PokedexType {
  abilities: [
    {
      ability?: {
        name?: string;
        url?: string;
      };
      is_hidden?: boolean;
      slot?: number;
    }
  ];
  alias: string;
  base_experience: number;
  cries: {
    latest?: string;
    legacy?: string;
  };
  forms: [
    {
      name?: string;
      url?: string;
    }
  ];
  game_indices: [
    {
      game_index?: number;
      version?: {
        name?: string;
        url?: string;
      };
    }
  ];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [
    {
      move?: {
        name?: string;
        url?: string;
      };
      version_group_details?: [
        {
          level_learned_at?: number;
          move_learn_method?: {
            name?: string;
            url?: string;
          };
          version_group?: {
            name?: string;
            url?: string;
          };
        }
      ];
    }
  ];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: {
    name?: string;
    url?: string;
  };
  sprites: {
    back_default?: string;
    back_female?: string | null;
    back_shiny?: string;
    back_shiny_female?: string | null;
    front_default?: string;
    front_female?: string | null;
    front_shiny?: string;
    front_shiny_female?: string | null;
    other?: {
      dream_world?: {
        front_default?: string;
        front_female?: string | null;
      };
      home?: {
        front_default?: string;
        front_female?: string | null;
        front_shiny?: string;
        front_shiny_female?: string | null;
      };
      official_artwork?: {
        front_default?: string;
        front_shiny?: string;
      };
      showdown?: {
        back_default?: string;
        back_female?: string | null;
        back_shiny?: string;
        back_shiny_female?: string | null;
        front_default?: string;
        front_female?: string | null;
        front_shiny?: string;
        front_shiny_female?: string | null;
      };
    };
    versions: null;
  };
  stats: [
    {
      base_stat?: number;
      effort?: number;
      stat?: {
        name?: string;
        url?: string;
      };
    }
  ];
  types: [
    {
      slot?: number;
      type?: {
        name?: string;
        url?: string;
      };
    }
  ];
  weight: number;
}
