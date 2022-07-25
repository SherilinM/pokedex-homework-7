package com.Ironhack.pokemonbackend.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TeamDTO {

    private Long trainer;

    private String[] pokemon;

    public TeamDTO(Long trainer) {
        this.trainer = trainer;
    }
}
