export class BackTeam {
    private _id: number;
    private _owner: string;
    private _pokemons: string[];
  
  
      constructor(id: number, owner: string, pokemons: string[]) {
        this._id = id;
        this._owner = owner;
        this._pokemons = pokemons;
      }
  
      public get id(): number {
        return this._id;
      }
      public set id(value: number) {
        this._id = value;
      }
  
      public get owner(): string {
        return this._owner;
      }
      public set owner(value: string) {
        this._owner = value;
      }
  
      public get pokemons(): string[] {
        return this._pokemons;
      }
      public set pokemons(value: string[]) {
        this._pokemons = value;
      }
  }