package com.ngola.backendlfsport.controllers;

import com.ngola.backendlfsport.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/auth")
public class AuthenticationController {
    private final AuthenticationService service;

    @PostMapping("authenticate")
    public String authenticate(Authentication authentication){
        return service.authenticate(authentication);
    }
}