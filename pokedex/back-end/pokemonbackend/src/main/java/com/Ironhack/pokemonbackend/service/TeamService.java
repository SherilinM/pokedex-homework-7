package com.Ironhack.pokemonbackend.service;

import com.Ironhack.pokemonbackend.controller.dto.TeamDTO;
import com.Ironhack.pokemonbackend.controller.dto.TeamWithNameDTO;
import com.Ironhack.pokemonbackend.dao.Team;
import com.Ironhack.pokemonbackend.dao.Trainer;
import com.Ironhack.pokemonbackend.repository.TeamRepository;
import com.Ironhack.pokemonbackend.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private TrainerRepository trainerRepository;


    public TeamWithNameDTO getTeamByTrainer(Long id) {
        Optional<Trainer> trainer = trainerRepository.findById(id);

        if(trainer.isPresent()){
            Optional<Team> team = teamRepository.findByTrainer(id);
            if(team.isPresent()){
                return new TeamWithNameDTO(
                        team.get().getId(),
                        trainerRepository.getById(team.get().getId()).getName(),
                        team.get().getPokemon()
                );
            }else{
                return null;
            }
        }else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No trainer matching that Id");
        }
    }


    public Team changeTeam(TeamDTO teamDTO) {
        Optional<Team> team = teamRepository.findByTrainer(teamDTO.getTrainer());

        if(team.isPresent()){
            team.get().setPokemon(teamDTO.getPokemon());
            return teamRepository.save(team.get());
        }else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No team matching that Id");
        }
    }

    // Needs error-handling
    public List<TeamWithNameDTO> getAllTeams() {
        List<Team> teamList = teamRepository.findAll();
        List<TeamWithNameDTO> teamListWithNames = new ArrayList<>();
        for (Team team: teamList) {
         teamListWithNames.add(
                 new TeamWithNameDTO(
                         team.getId(),
                         trainerRepository.getById(team.getId()).getName(),
                         team.getPokemon()));
        }
        return teamListWithNames;
    }

    public TeamWithNameDTO deletePokemonFromTeam(Long teamId, String pokemonName) {
        System.out.println("\ndelete service has been called\n");
        Optional<Team> foundTeam = teamRepository.findById(teamId);
        boolean foundPoke = false;
        if (foundTeam.isPresent()){
            int i = 0;
            String[] newPokemonArray = new String[foundTeam.get().getPokemon().length - 1];
            int index = Arrays.asList(foundTeam.get().getPokemon()).indexOf(pokemonName);
            for (String pokemon : foundTeam.get().getPokemon()) {
                if (pokemon.equals(pokemonName) && !foundPoke){
                    foundPoke = true;
                    continue;
                } else {
                    newPokemonArray[i] = pokemon;
                    i++;
                }
            }
            foundTeam.get().setPokemon(newPokemonArray);
            teamRepository.save(foundTeam.get());
        }
            return null;
        }

}
