export interface Trainer {
    id: number;
    name: string;
    hobby: string;
    age: number;
    photo: string; //url
}

export const placehorder_trainers : Array<Trainer> = [
    {
      id: 1, 
      name: "John Doe",
      hobby: "Training pokemons",
      age: 39,
      photo: "https://randomuser.me/api/portraits/men/16.jpg"
    },
    {
      id: 2,
      name: "Mary Jones",
      hobby: "Killing pokemons",
      age: 23,
      photo: "https://randomuser.me/api/portraits/women/16.jpg"
    },
    {
      id: 3,
      name: "Archibald Lector",
      hobby: "Eating pokemons",
      age: 16,
      photo: "https://randomuser.me/api/portraits/men/15.jpg"
    }
];