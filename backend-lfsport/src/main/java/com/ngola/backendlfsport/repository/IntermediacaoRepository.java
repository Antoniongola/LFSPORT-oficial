package com.ngola.backendlfsport.repository;

import com.ngola.backendlfsport.entity.Intermediacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IntermediacaoRepository extends JpaRepository<Intermediacao, Long> {
    public List<Intermediacao> findAllByJogadorTransferidoEqualsIgnoreCase(String nome);
}
