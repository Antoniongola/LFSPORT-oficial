package com.ngola.backendlfsport.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class FootballElement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
    protected String nome;
    protected String equipa;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    protected String descricao;
    protected String photoPath;
}
