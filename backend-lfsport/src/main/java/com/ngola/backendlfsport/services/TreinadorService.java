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

    public ResponseEntity<Treinador> newTreinador(Treinador treinador){
        return ResponseEntity.ok(this.treinadorRepository.save(treinador));
    }

    public ResponseEntity<Treinador> getTreinador(long id){
        return ResponseEntity.ok(this.treinadorRepository.findById(id).orElseThrow());
    }

    public ResponseEntity<List<Treinador>> getAllTreinador(){
        return ResponseEntity.ok(this.treinadorRepository.findAll());
    }

    public ResponseEntity<Treinador> updateTreinador(Treinador treinador, long id){
        if(this.treinadorRepository.existsById(id)){
            return ResponseEntity.ok(this.treinadorRepository.save(treinador));
        }

        return ResponseEntity.status(401).body(null);
    }

    public void deleteTreinador(long id){
        this.treinadorRepository.deleteById(id);
    }


}
