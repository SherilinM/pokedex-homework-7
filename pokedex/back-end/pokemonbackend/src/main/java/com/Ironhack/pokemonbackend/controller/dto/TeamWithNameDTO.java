package com.Ironhack.pokemonbackend.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TeamWithNameDTO {

    private Long id;
    private String owner;
    private String[] pokemons;

}
