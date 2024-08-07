package com.ngola.backendlfsport.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final JwtService service;

    public String authenticate(Authentication authentication){
        return this.service.generateToken(authentication);
    }
}
