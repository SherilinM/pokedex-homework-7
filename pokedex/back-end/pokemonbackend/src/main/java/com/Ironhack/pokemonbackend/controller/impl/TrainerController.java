package com.Ironhack.pokemonbackend.controller.impl;

import com.Ironhack.pokemonbackend.controller.dto.TrainerDTO;
import com.Ironhack.pokemonbackend.dao.Trainer;
import com.Ironhack.pokemonbackend.service.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trainers")
@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
public class TrainerController {

    @Autowired
    private TrainerService trainerService;


    @GetMapping()
    public List<Trainer> getAll() {
        return trainerService.getAllTrainers();
    }

    @GetMapping("/{id}")
    public Trainer getTrainer(@PathVariable(name = "id") Long id){
        return trainerService.getTrainerById(id);
    }

    @PostMapping()
    public Trainer newTrainer(@RequestBody TrainerDTO trainerDTO){
        return trainerService.createTrainer(trainerDTO);
    }

    @DeleteMapping("/{id}")
    public String deleteTrainer(@PathVariable(name="id") Long id){
        return trainerService.removeTrainer(id);
    }

}
