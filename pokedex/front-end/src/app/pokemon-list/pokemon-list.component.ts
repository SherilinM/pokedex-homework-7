import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Result } from '../models/result.model';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonGeneral: Result[] = [];
  pokemonList: Pokemon[] = [];

  page: number = 1;

  constructor(private pokemonService: PokemonService) {}
   
  ngOnInit(): void {
    this.loadPokedex();
  }

  loadPokedex():void {
    this.pokemonService.getAllPokemon().subscribe(dataResult => {
      dataResult.results.forEach(result => {
        this.pokemonGeneral.push(new Result(result.name, result.url));
        this.getPokemonList(result.url);
      })
    })
  }

  getPokemonList(url: string): void {
    let pokemon: Pokemon;
    this.pokemonService.getPokemon(url).subscribe(dataResult => {
        let pokemon: Pokemon = new Pokemon(
        dataResult.id,
        dataResult.name.split("-")[0],
        '',
        dataResult.sprites.front_default,
        dataResult.stats[0].base_stat,
        dataResult.stats[1].base_stat,
        dataResult.stats[2].base_stat,
        dataResult.stats[3].base_stat,
        dataResult.stats[4].base_stat,
        dataResult.stats[5].base_stat,
        []
        )

        pokemon.types[0] = dataResult.types[0].type.name;
        if (dataResult.types.length > 1) {
          pokemon.types[1] = dataResult.types[1].type.name;
        }

        this.pokemonList.push(pokemon);
    })
  }
  
  nextPage():void{
    if(this.page <= 151/12){
      this.page = this.page +1;
    }
  }

  previousPage():void{
    if(this.page > 1){
      this.page = this.page -1;
    }
  }

}
