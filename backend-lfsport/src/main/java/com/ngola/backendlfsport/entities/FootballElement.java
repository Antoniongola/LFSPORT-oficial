package com.ngola.backendlfsport.entities;

import jakarta.persistence.*;
import jakarta.websocket.Encoder;
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
