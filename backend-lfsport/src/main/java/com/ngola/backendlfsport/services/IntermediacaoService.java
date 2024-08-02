package com.ngola.backendlfsport.services;

import com.ngola.backendlfsport.entities.Intermediacao;
import com.ngola.backendlfsport.repositories.IntermediacaoRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
@RequiredArgsConstructor
public class IntermediacaoService {
    private final IntermediacaoRepository intermediacaoRepository;

    public ResponseEntity<Intermediacao> newIntermediacao(Intermediacao intermediacao) {
        return ResponseEntity.ok(intermediacaoRepository.save(intermediacao));
    }

    public ResponseEntity<Intermediacao> updateIntermediacao(Intermediacao intermediacao) {
        return ResponseEntity.ok(intermediacaoRepository.save(intermediacao));
    }

    public void deleteIntermediacao(long intermediacao) {
        intermediacaoRepository.deleteById(intermediacao);
    }

    public ResponseEntity<Intermediacao> getIntermediacao(long intermediacao) {
        return ResponseEntity.ok(intermediacaoRepository.findById(intermediacao).get());
    }

    public ResponseEntity<List<Intermediacao>> getAllIntermediacoes() {
        return ResponseEntity.ok(intermediacaoRepository.findAll());
    }

}
