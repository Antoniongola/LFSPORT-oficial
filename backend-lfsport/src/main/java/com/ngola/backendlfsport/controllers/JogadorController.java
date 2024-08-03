package com.ngola.backendlfsport.controllers;

import com.ngola.backendlfsport.entities.Jogador;
import com.ngola.backendlfsport.entities.Utilizador;
import com.ngola.backendlfsport.services.JogadorService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/jogador")
@CrossOrigin(origins = {"http://localhost:4200"})
@RequiredArgsConstructor
public class JogadorController {
    private final JogadorService jogadorService;

    @PostMapping
    public ResponseEntity<Jogador> newJogador(@RequestBody Jogador jogador){
        return this.jogadorService.newJogador(jogador);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Jogador> getJogador(@PathVariable long id){
        return this.jogadorService.getJogadorById(id);
    }

    @GetMapping
    public ResponseEntity<List<Jogador>> getAllJogadores(){
        return this.jogadorService.getAllJogador();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Jogador> updateJogador(@RequestBody Jogador jogador, @PathVariable long id){
        return this.jogadorService.updateJogador(jogador, id);
    }

    @DeleteMapping("/{id}")
    public void deleteJogador(long id){
        this.jogadorService.deleteJogador(id);
    }

}
