import { IPokemon } from './../interfaces/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { InterfaceList } from '../interfaces/list';
import { Pokemon } from '../models/pokemon.model';
import { SearchResult } from '../interfaces/search-results';
import { PokedexEntry } from '../interfaces/pokedexEntry';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private results : Pokemon[] = []; 

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient){ }

  getAllPokemon():Observable<InterfaceList> {
    return this.http.get<InterfaceList>('https://pokeapi.co/api/v2/pokemon?limit=151');  // The original pokemons are 151

  }

  getPokemonByName(name: string):Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.baseUrl}/${name}`);
  }

  getPokemonById(id: number):Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.baseUrl}/${id}`);
  }
  
  getPokemon(url:string):Observable<IPokemon> {
    return this.http.get<IPokemon>(url)
    .pipe(tap(x => x, catchError(this.handleError<IPokemon>('getPokemon'))));
  }

  searchPokemons(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
      return of([]);
    }
    
    this.http.get<SearchResult>('https://pokeapi.co/api/v2/pokemon?limit=151').pipe(
        tap(x => x.results.length ?
          console.log(`Found pokemons matching "${term}"`)
          :
          console.log(`No matching results`)),
          catchError(this.handleError<SearchResult>('searchPokemon')
        ))
      .subscribe(pokemons => this.results = pokemons.results);
    
    var foundPokemons = this.results.filter(pokemon => pokemon.name.includes(term));

    return foundPokemons ? of(foundPokemons) : of([]);

  }
  
  private handleError<T>(operation = 'operation', result?:T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getPokemonEntry(id: number):Observable<PokedexEntry> {
    return this.http.get<PokedexEntry>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
}