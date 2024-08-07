package com.ngola.backendlfsport.repository;

import com.ngola.backendlfsport.entity.Treinador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreinadorRepository extends JpaRepository<Treinador, Long> {
}
