package com.ngola.backendlfsport.security.admin;

import com.ngola.backendlfsport.entity.FileManager;
import com.ngola.backendlfsport.entity.Utilizador;
import com.ngola.backendlfsport.repository.UtilizadorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Admin implements CommandLineRunner {
    private final BCryptPasswordEncoder securityConfigs = new BCryptPasswordEncoder();
    private final UtilizadorRepository utilizadorRepository;
    private final FileManager fileManager;

    @Override
    public void run(String... args) throws Exception {
        Utilizador user = new Utilizador();
        user.setId(1);
        user.setUsername("Lfsport");
        user.setPassword(this.securityConfigs.encode("lf@12342023"));

        if(!this.utilizadorRepository.existsById(user.getId()))
            this.utilizadorRepository.save(user);

    }
}
