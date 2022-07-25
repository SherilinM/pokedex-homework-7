import { Pokemon } from "../models/pokemon.model";

export interface SearchResult {
    count: number,
    next: string,
    previous: string | null,
    results: Pokemon[]
}