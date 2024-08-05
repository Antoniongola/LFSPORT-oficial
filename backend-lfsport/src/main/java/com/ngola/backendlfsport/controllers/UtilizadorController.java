package com.ngola.backendlfsport.controllers;

import com.ngola.backendlfsport.entities.Utilizador;
import com.ngola.backendlfsport.services.UtilizadorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/utilizador")
@CrossOrigin(origins = {"http://localhost:4200"})
@RequiredArgsConstructor
public class UtilizadorController {
    private final UtilizadorService utilizadorService;

    @PutMapping("/{id}")
    public ResponseEntity<Utilizador> updateUtilizador(@PathVariable String id, @RequestBody Utilizador user){
        return this.utilizadorService.updateUtilizador(user, Long.parseLong(id));
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody Utilizador utilizador){
        return this.utilizadorService.login(utilizador);
    }

}
