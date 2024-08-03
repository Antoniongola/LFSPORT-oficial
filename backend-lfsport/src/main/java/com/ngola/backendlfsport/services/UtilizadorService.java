package com.ngola.backendlfsport.services;

import com.ngola.backendlfsport.entities.Utilizador;
import com.ngola.backendlfsport.repositories.UtilizadorRepository;
import com.ngola.backendlfsport.security.SecurityConfigs;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UtilizadorService{
    private final UtilizadorRepository utilizadorRepository;
    private final SecurityConfigs securityConfigs;

    public ResponseEntity<Utilizador> updateUtilizador(Utilizador user, long id){
        return ResponseEntity.ok(this.utilizadorRepository.save(user));
    }

    public ResponseEntity<Boolean> login(Utilizador user){
        if(this.utilizadorRepository.findByUsername(user.getUsername()) != null){
            Utilizador autentico = this.utilizadorRepository.findByUsername(user.getUsername());
            if(this.securityConfigs.encoder().matches(user.getPassword(), autentico.getPassword())){
                return ResponseEntity.ok(true);
            }

            return ResponseEntity.status(401).body(false);
        }

        return ResponseEntity.status(401).body(false);
    }
}
