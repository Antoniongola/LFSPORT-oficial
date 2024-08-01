package com.ngola.backendlfsport.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Generated;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Treinador extends FootballElement{
}
