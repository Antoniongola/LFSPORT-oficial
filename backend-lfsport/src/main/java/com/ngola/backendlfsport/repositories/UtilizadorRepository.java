package com.ngola.backendlfsport.repositories;

import com.ngola.backendlfsport.entities.Utilizador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilizadorRepository extends JpaRepository<Utilizador, Long> {
    public Utilizador findByUsernameIgnoreCase(String username);
}
