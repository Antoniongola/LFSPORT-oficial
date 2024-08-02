package com.ngola.backendlfsport.services;

import com.ngola.backendlfsport.entities.Treinador;
import com.ngola.backendlfsport.repositories.TreinadorRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
@RequiredArgsConstructor
public class TreinadorService {
    private final TreinadorRepository treinadorRepository;

    public ResponseEntity<Treinador> newTreinador(Treinador treinador) {
        return ResponseEntity.ok(treinadorRepository.save(treinador));
    }

    public ResponseEntity<Treinador> updateTreinador(Treinador treinador) {
        return ResponseEntity.ok(treinadorRepository.save(treinador));
    }

    public void deleteTreinador(long id) {
        treinadorRepository.deleteById(id);
    }

    public ResponseEntity<Treinador> getTreinador(long id) {
        return ResponseEntity.ok(treinadorRepository.findById(id).orElse(null));
    }

    public ResponseEntity<List<Treinador>> getAllTreinador() {
        return ResponseEntity.ok(treinadorRepository.findAll());
    }

}
