package com.ngola.backendlfsport.service;

import com.ngola.backendlfsport.entity.Utilizador;
import com.ngola.backendlfsport.repository.UtilizadorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UtilizadorService{
    private final UtilizadorRepository utilizadorRepository;
    private final BCryptPasswordEncoder securityConfigs = new BCryptPasswordEncoder();

    public ResponseEntity<Utilizador> updateUtilizador(Utilizador user, long id){
        return ResponseEntity.ok(this.utilizadorRepository.save(user));
    }

    public ResponseEntity<Boolean> login(Utilizador user){
        if(this.utilizadorRepository.findByUsernameIgnoreCase(user.getUsername()).isPresent()){
            Utilizador autentico = this.utilizadorRepository.findByUsernameIgnoreCase(user.getUsername()).get();
            if(this.securityConfigs.matches(user.getPassword(), autentico.getPassword())){
                return ResponseEntity.ok(true);
            }

            return ResponseEntity.status(401).body(false);
        }

        return ResponseEntity.status(401).body(false);
    }
}
