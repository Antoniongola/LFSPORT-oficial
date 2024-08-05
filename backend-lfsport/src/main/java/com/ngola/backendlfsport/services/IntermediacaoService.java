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

    public ResponseEntity<Intermediacao> newIntermediacao(Intermediacao intermediacao){
        return ResponseEntity.ok(this.intermediacaoRepository.save(intermediacao));
    }

    public ResponseEntity<Intermediacao> getIntermediacao(long id){
        return ResponseEntity.ok(this.intermediacaoRepository.findById(id).orElseThrow());
    }

    public ResponseEntity<List<Intermediacao>> getAllIntermediacao(){
        return ResponseEntity.ok(this.intermediacaoRepository.findAll());
    }

    public ResponseEntity<List<Intermediacao>> getPlayerIntermediacoes(String nome){
        return ResponseEntity.ok(this.intermediacaoRepository.findAllByJogadorTransferidoEqualsIgnoreCase(nome));
    }

    public ResponseEntity<Intermediacao> updateIntermediacao(Intermediacao intermediacao, long id){
        if(this.intermediacaoRepository.existsById(id)){
            return ResponseEntity.ok(this.intermediacaoRepository.save(intermediacao));
        }

        return ResponseEntity.status(401).body(null);
    }

    public void deleteIntermediacao(long id){
        this.intermediacaoRepository.deleteById(id);
    }
}
