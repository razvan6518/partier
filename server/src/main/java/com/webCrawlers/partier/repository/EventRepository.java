package com.codecool.hogwarts_potions.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PotionRepository extends JpaRepository<Potion, Long> {

}