package com.Ironhack.pokemonbackend.controller.impl;

import com.Ironhack.pokemonbackend.controller.dto.TrainerDTO;
import com.Ironhack.pokemonbackend.dao.Team;
import com.Ironhack.pokemonbackend.dao.Trainer;
import com.Ironhack.pokemonbackend.repository.TeamRepository;
import com.Ironhack.pokemonbackend.repository.TrainerRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class TrainerControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private TrainerRepository trainerRepository;

    private MockMvc mockMvc;
    private final ObjectMapper objectMapper = new ObjectMapper();

    private Trainer trainer1;
    private Trainer trainer2;
    private Trainer trainer3;

    private Team team1;
    private Team team2;
    private Team team3;


    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        trainer1 = new Trainer("Test Trainer 1", 87, "Testing Code", "SamplePhoto");
        trainerRepository.save(trainer1);
        trainer2 = new Trainer("Test Trainer 2", 55, "Testing Code", "SamplePhoto");
        trainerRepository.save(trainer2);
        trainer3 = new Trainer("Test Trainer 3", 66, "Testing Code", "SamplePhoto");
        trainerRepository.save(trainer3);

        team1 = new Team(trainer1.getId(),new String[]{"Poke1", "Poke2", "Poke3"});
        teamRepository.save(team1);
        team2 = new Team(trainer2.getId(),new String[]{"Poke4", "Poke5", "Poke6"});
        teamRepository.save(team2);
        team3 = new Team(trainer3.getId(),new String[]{"Poke7", "Poke8", "Poke9"});
        teamRepository.save(team3);

    }

    @AfterEach
    void tearDown() {
        teamRepository.deleteAll();
        trainerRepository.deleteAll();
    }

    @Test
    void getAll() throws Exception{
        MvcResult mvcResult = mockMvc.perform(

                get("/trainers")
                        .contentType(MediaType.APPLICATION_JSON)
        ).andReturn();
        assertTrue(mvcResult.getResponse().getContentAsString().contains("Test Trainer 2"));
    }

    @Test
    void getTrainer() throws Exception {
        MvcResult mvcResult = mockMvc.perform(

                get("/trainers/"+trainer1.getId())
                        .contentType(MediaType.APPLICATION_JSON)
        ).andReturn();
        assertTrue(mvcResult.getResponse().getContentAsString().contains("Test Trainer 1"));
    }

    @Test
    void getInvalidTrainer() throws Exception {
        MvcResult mvcResult = mockMvc.perform(

                get("/trainers/"+99)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isBadRequest()).andReturn();

    }

    @Test
    void newTrainer() throws Exception {
        TrainerDTO trainerDTO = new TrainerDTO("Test Trainer 99", 99, "Testing Put Methods", "SomeURL");
        String body = objectMapper.writeValueAsString(trainerDTO);
        MvcResult mvcResult = mockMvc.perform(
                post("/trainers")
                        .content(body)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andReturn();

        assertTrue(mvcResult.getResponse().getContentAsString().contains("Test Trainer 99"));
    }

    @Test
    void deleteTrainer() throws Exception {
        MvcResult mvcResult = mockMvc.perform(
                delete("/trainers/"+trainer1.getId())
                        .contentType(MediaType.APPLICATION_JSON)
        ).andReturn();
        Optional<Trainer> trainer = trainerRepository.findById(trainer1.getId());
        assertTrue(trainer.isEmpty());
        assertFalse(trainer.isPresent());
    }

    @Test
    void deleteInvalidTrainer() throws Exception {
        MvcResult mvcResult = mockMvc.perform(
                delete("/trainers/"+99)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isBadRequest()).andReturn();

    }
}