package com.ngola.backendlfsport.controllers;

import com.ngola.backendlfsport.entities.Intermediacao;
import com.ngola.backendlfsport.entities.Jogador;
import com.ngola.backendlfsport.services.IntermediacaoService;
import com.ngola.backendlfsport.services.JogadorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/intermediacao")
@CrossOrigin(origins = {"http://localhost:4200"})
@RequiredArgsConstructor
public class IntermediacaoController {
    private final IntermediacaoService intermediacaoService;
    private final JogadorService jogadorService;

    @PostMapping
    public ResponseEntity<Intermediacao> newIntermediacao(@RequestBody Intermediacao intermediacao){
        return this.intermediacaoService.newIntermediacao(intermediacao);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Intermediacao> getIntermediacao(@PathVariable String id){
        return this.intermediacaoService.getIntermediacao(Long.parseLong(id));
    }

    @GetMapping
    public ResponseEntity<List<Intermediacao>> getAllIntermediacao(){
        return this.intermediacaoService.getAllIntermediacao();
    }

    @GetMapping("/jogador/{id}")
    public ResponseEntity<List<Intermediacao>> getPlayerIntermediacoes(@PathVariable String id){
        Jogador jogador = this.jogadorService.getJogadorById(Long.parseLong(id)).getBody();
        if(jogador!= null)
            return this.intermediacaoService.getPlayerIntermediacoes(jogador.getNome());

        return ResponseEntity.status(401).body(null);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Intermediacao> updateIntermediacao(@RequestBody Intermediacao intermediacao, @PathVariable String id){
        return this.intermediacaoService.updateIntermediacao(intermediacao, Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    public void deleteIntermediacao(@PathVariable String id){
        this.intermediacaoService.deleteIntermediacao(Long.parseLong(id));
    }
}
