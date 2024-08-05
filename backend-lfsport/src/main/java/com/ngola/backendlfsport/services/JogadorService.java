package com.ngola.backendlfsport.services;

import com.ngola.backendlfsport.entities.Jogador;
import com.ngola.backendlfsport.repositories.JogadorRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
@RequiredArgsConstructor
public class JogadorService {
    private final JogadorRepository jogadorRepository;

    public ResponseEntity<Jogador> newJogador(Jogador jogador){
        return ResponseEntity.ok(this.jogadorRepository.save(jogador));
    }

    public ResponseEntity<Jogador> getJogadorById(long id){
        return ResponseEntity.ok(this.jogadorRepository.findById(id).orElseThrow());
    }

    public ResponseEntity<List<Jogador>> getAllJogador(){
        return ResponseEntity.ok(this.jogadorRepository.findAll());
    }

    public ResponseEntity<Jogador> updateJogador(Jogador jogador, long id){
        if(this.jogadorRepository.existsById(id)){
            return ResponseEntity.ok(this.jogadorRepository.save(jogador));
        }

        return ResponseEntity.status(401).body(null);
    }

    public void deleteJogador(long id){
        this.jogadorRepository.deleteById(id);
    }
}
