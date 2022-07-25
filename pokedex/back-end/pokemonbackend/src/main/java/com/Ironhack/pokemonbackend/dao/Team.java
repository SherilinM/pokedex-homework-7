package com.Ironhack.pokemonbackend.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long trainer;

    private String[] pokemon;


    public Team(Long trainer, String[] pokemon) {
        this.trainer = trainer;
        this.pokemon = pokemon;
    }

    public Team(Long trainer) {
        this.trainer = trainer;
    }
}
