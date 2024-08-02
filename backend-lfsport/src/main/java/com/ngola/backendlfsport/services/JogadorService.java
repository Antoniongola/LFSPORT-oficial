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

    public ResponseEntity<Jogador> newJogador(Jogador jogador) {
        return ResponseEntity.ok(jogadorRepository.save(jogador));
    }

    public ResponseEntity<Jogador> updateJogador(Jogador jogador) {
        return ResponseEntity.ok(jogadorRepository.save(jogador));
    }

    public void deleteJogadorById(long jogador) {
        jogadorRepository.deleteById(jogador);
    }

    public ResponseEntity<List<Jogador>> findAllJogador() {
        return ResponseEntity.ok(jogadorRepository.findAll());
    }

    public ResponseEntity<Jogador> findJogadorById(Long id) {
        return ResponseEntity.ok(jogadorRepository.findById(id).orElse(null));
    }

}
