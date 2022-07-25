export interface IPokemon{
    
    id:number,
    name:string,
    
    sprites: {  
      front_default: string,
    },
    stats: [
      {
        base_stat:number,
        "name": "hp"
      },
      {
        base_stat:number,
        "name": "attack",
      },
      {
        base_stat:number,
        "name": "defense",
      },
      {
        base_stat:number,
        "name": "special-attack",
      },
      {
        base_stat:number,
        "name": "special-defense",
      },
      {
        base_stat:number,
        "name": "speed", 
      }
    ],
    
    types: [
      {
        type: {
          name: string,
         }
      },
      {
        type: {
          name: string,
         }
      }
    ],
  }