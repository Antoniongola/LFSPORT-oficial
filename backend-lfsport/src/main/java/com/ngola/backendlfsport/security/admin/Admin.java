package com.ngola.backendlfsport.security.admin;

import com.ngola.backendlfsport.entities.Utilizador;
import com.ngola.backendlfsport.repositories.UtilizadorRepository;
import com.ngola.backendlfsport.security.SecurityConfigs;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Admin implements CommandLineRunner {
    private SecurityConfigs securityConfigs;
    private final UtilizadorRepository utilizadorRepository;

    @Override
    public void run(String... args) throws Exception {
        Utilizador user = new Utilizador();
        user.setId(1);
        user.setUsername("Lfsport");
        user.setPassword(this.securityConfigs.encoder().encode("lf@12342023"));

        if(!this.utilizadorRepository.existsById(user.getId()))
            this.utilizadorRepository.save(user);
    }
}
