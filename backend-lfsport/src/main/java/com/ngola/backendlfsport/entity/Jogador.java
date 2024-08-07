package com.ngola.backendlfsport.entity;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Jogador extends FootballElement{
    private String posicao;
    private String equipaNacional;
    private String pePreferido;
    private String dataNascimento;
    private int altura;
    private String nacionalidade;
    private String trofeus;
}
