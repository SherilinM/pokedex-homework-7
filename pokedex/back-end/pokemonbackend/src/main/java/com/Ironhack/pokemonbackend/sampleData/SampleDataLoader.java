package com.Ironhack.pokemonbackend.sampleData;


import com.Ironhack.pokemonbackend.dao.Team;
import com.Ironhack.pokemonbackend.dao.Trainer;
import com.Ironhack.pokemonbackend.repository.TeamRepository;
import com.Ironhack.pokemonbackend.repository.TrainerRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component
public class SampleDataLoader implements CommandLineRunner {

    private final TeamRepository teamRepository;
    private final TrainerRepository trainerRepository;
    private final Faker faker;

    public SampleDataLoader(TeamRepository teamRepository, TrainerRepository trainerRepository, Faker faker) {
        this.teamRepository = teamRepository;
        this.trainerRepository = trainerRepository;
        this.faker = faker;
    }


    @Override
    public void run(String... args) throws Exception {

        List<Trainer> sampleData = IntStream.rangeClosed(1,10)
                .mapToObj(i -> new Trainer(
                        faker.name().firstName(),
                        faker.number().numberBetween(18,99),
                        faker.job().field(),
                        "https://www.seekpng.com/png/detail/242-2421423_pokemon-trainer-sprite-png-pixel-pokemon-trainer-sprites.png"
                )).collect(Collectors.toList());

        trainerRepository.saveAll(sampleData);

        List<Team> sampleTeamData = IntStream.rangeClosed(1,10)
                .mapToObj(i -> new Team(
                        (long) i,
                        new String[]{faker.pokemon().name().toLowerCase(Locale.ROOT), faker.pokemon().name().toLowerCase(Locale.ROOT), faker.pokemon().name().toLowerCase(Locale.ROOT), faker.pokemon().name().toLowerCase(Locale.ROOT), faker.pokemon().name().toLowerCase(Locale.ROOT), faker.pokemon().name().toLowerCase(Locale.ROOT)}
                )).collect(Collectors.toList());

        teamRepository.saveAll(sampleTeamData);
    }
}
