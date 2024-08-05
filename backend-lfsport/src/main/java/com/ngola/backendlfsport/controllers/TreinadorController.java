package com.ngola.backendlfsport.controllers;

import com.ngola.backendlfsport.entities.Treinador;
import com.ngola.backendlfsport.services.TreinadorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/treinador")
@CrossOrigin(origins = {"http://localhost:4200"})
@RequiredArgsConstructor
public class TreinadorController {
    private final TreinadorService treinadorService;

    @PostMapping
    public ResponseEntity<Treinador> newTreinador(@RequestBody Treinador treinador){
        return this.treinadorService.newTreinador(treinador);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Treinador> getTreinador(@PathVariable String id){
        return this.treinadorService.getTreinador(Long.parseLong(id));
    }

    @GetMapping
    public ResponseEntity<List<Treinador>> getAllTreinadores(){
        return this.treinadorService.getAllTreinador();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Treinador> updateTreinador(@PathVariable String id, @RequestBody Treinador treinador){
        return this.treinadorService.updateTreinador(treinador, Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    public void deleteTreinador(@PathVariable String id){
        this.treinadorService.deleteTreinador(Long.parseLong(id));
    }
}
