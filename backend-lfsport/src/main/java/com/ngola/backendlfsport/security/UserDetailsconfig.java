package com.ngola.backendlfsport.security;

import com.ngola.backendlfsport.entities.Utilizador;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserDetailsconfig implements UserDetailsService {
    private Utilizador user;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return user;
    }
}
