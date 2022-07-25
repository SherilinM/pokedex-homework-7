package com.Ironhack.pokemonbackend.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TrainerDTO {

    private String name;
    private int age;
    private String hobby;
    private String photo;

}
