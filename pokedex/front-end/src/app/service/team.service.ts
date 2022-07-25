import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';
import { BackTeam } from '../models/back-team.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl = 'http://localhost:8080/teams/';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(
    private http: HttpClient
  ) { }

  getTeams(): Observable<BackTeam[]> {
    return this.http.get<BackTeam[]>(this.baseUrl);
  }

  getTeam(id: number): Observable<Team> {
    console.log(`getTeam a ${this.baseUrl}${id}`)
    return this.http.get<Team>(this.baseUrl + id);
  }

  deletePokemonFromTeam(teamId: number, pokemon: string): Observable<any> {
    console.log(`deletePokemonFromTeam a ${this.baseUrl}${teamId}`);
    console.log(`deletePokemonFromTeam a ${pokemon}`);
    let pokemonDTO = {pokemonName: pokemon};
    return this.http.put<any>(`http://localhost:8080/teams/${teamId}`, pokemonDTO, this.httpOptions);
  }
}



