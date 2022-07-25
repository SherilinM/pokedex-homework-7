package com.Ironhack.pokemonbackend.service;

import com.Ironhack.pokemonbackend.controller.dto.TrainerDTO;
import com.Ironhack.pokemonbackend.dao.Team;
import com.Ironhack.pokemonbackend.dao.Trainer;
import com.Ironhack.pokemonbackend.repository.TeamRepository;
import com.Ironhack.pokemonbackend.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.Optional;

@Service
public class TrainerService {

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private TeamRepository teamRepository;


    public List<Trainer> getAllTrainers() {
        return trainerRepository.findAll();
    }


    public Trainer getTrainerById(Long id) {
        Optional<Trainer> trainer = trainerRepository.findById(id);

        if(trainer.isPresent()){
            return trainer.get();
        }else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No trainer matching that Id");
        }
    }

    public Trainer createTrainer(TrainerDTO trainerDTO) {
        Trainer newTrainer =  new Trainer(trainerDTO.getName(), trainerDTO.getAge(), trainerDTO.getHobby(), trainerDTO.getPhoto());
        trainerRepository.save(newTrainer);
        Team newTeam = new Team(newTrainer.getId());
        teamRepository.save(newTeam);
        return newTrainer;
    }


    public String removeTrainer(Long id) {
        Optional<Trainer> trainer = trainerRepository.findById(id);
        if(trainer.isPresent()){
            Optional<Team> team = teamRepository.findByTrainer(id);
            if(team.isPresent()){
                teamRepository.deleteById(team.get().getId());
                trainerRepository.deleteById(trainer.get().getId());
                return "Trainer and Team Deleted";
            }else{
                trainerRepository.deleteById(trainer.get().getId());
                return "Trainer Deleted";
            }
        }else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No trainer matching that Id");
        }
    }
}
