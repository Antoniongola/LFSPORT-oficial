package com.ngola.backendlfsport.repository;

import com.ngola.backendlfsport.entity.Utilizador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UtilizadorRepository extends JpaRepository<Utilizador, Long> {
    public Optional<Utilizador> findByUsernameIgnoreCase(String username);
}
