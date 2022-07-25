import { PokemonService } from './../service/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  selectedPokemon: Pokemon | undefined;

  pokemonId : number = 0;
  page : number = this.route.snapshot.params['id'];

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonId = this.route.snapshot.params['id'];

    this.pokemonService.getPokemonById(this.pokemonId).subscribe(result => {
      let pokemon : Pokemon = new Pokemon(
        result.id.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false}),
        result.name.split("-")[0],
        '',
        result.sprites.front_default,
        result.stats[0].base_stat,
        result.stats[1].base_stat,
        result.stats[2].base_stat,
        result.stats[3].base_stat,
        result.stats[4].base_stat,
        result.stats[5].base_stat,
        []
      )
      pokemon.types[0] = result.types[0].type.name.toUpperCase();

      if (result.types.length > 1) {
        pokemon.types[1] = result.types[1].type.name.toUpperCase();
      }

      this.pokemonService.getPokemonEntry(this.pokemonId).subscribe(result => {
        pokemon.entry = result.flavor_text_entries[1].flavor_text
      })

      this.selectedPokemon = pokemon;
    })
  }

  nextPage(): void {
    if(this.page <= 150){
      this.page++;
      this.router.navigate(['/pokemon', this.page ]).then(() => {
        window.location.reload();
      });
    }
  }

  previousPage():void{
    if(this.page > 1){
      this.page--;
      this.router.navigate(['/pokemon', this.page ]).then(() => {
        window.location.reload();
      });
    }
  }
}
