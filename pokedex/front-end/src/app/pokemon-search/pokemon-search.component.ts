import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  pokemons$! : Observable<Pokemon[]>;
  private searchTerms = new Subject<string>();
  noMatches = false;
  activeSearch = false;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonService.
      searchPokemons(term))
    );
      this.pokemons$.subscribe(x => x.length === 0? this.noMatches = true : this.noMatches = false);
      this.searchTerms.subscribe(x => x.length !== 0? this.activeSearch = true : this.activeSearch = false);


  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
