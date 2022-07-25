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
public class Trainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int age;
    private String hobby;
    private String photo;


    public Trainer(String name, int age, String hobby, String photo) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        this.photo = photo;
    }

}
