package com.ngola.backendlfsport.service;

import com.ngola.backendlfsport.repository.UtilizadorRepository;
import com.ngola.backendlfsport.security.UserAuthenticated;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@RequiredArgsConstructor
public class UserDetailsServiceImp implements UserDetailsService {
    private final UtilizadorRepository repository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByUsernameIgnoreCase(username)
                .map(UserAuthenticated::new)
                .orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
}
