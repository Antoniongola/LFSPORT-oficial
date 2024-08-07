package com.ngola.backendlfsport.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Intermediacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String jogadorTransferido;
    private String equipaAntiga;
    private String equipaNova;
    private long anoIntermediacao;
    private String photoPath;
}
