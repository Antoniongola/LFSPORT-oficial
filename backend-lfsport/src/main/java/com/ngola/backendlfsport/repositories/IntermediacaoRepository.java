package com.ngola.backendlfsport.repositories;

import com.ngola.backendlfsport.entities.Intermediacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntermediacaoRepository extends JpaRepository<Intermediacao, Long> {

}
