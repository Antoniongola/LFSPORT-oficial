package com.ngola.backendlfsport.services;

import com.ngola.backendlfsport.entities.FileManager;
import com.ngola.backendlfsport.entities.Intermediacao;
import com.ngola.backendlfsport.entities.Jogador;
import com.ngola.backendlfsport.repositories.IntermediacaoRepository;
import com.ngola.backendlfsport.repositories.JogadorRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.CurrentTimestamp;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Data
@RequiredArgsConstructor
public class JogadorService {
    private final JogadorRepository jogadorRepository;
    private final IntermediacaoRepository intermediacaoRepository;
    private final FileManager fm;
    private LocalDateTime tempo = LocalDateTime.now();

    public ResponseEntity<Jogador> newJogador(Jogador jogador, MultipartFile image) throws IOException {
        this.jogadorRepository.save(jogador);
        String instante = tempo.getYear()+"-"+ tempo.getMonth()+"-"+ tempo.getDayOfMonth();
        instante+="-"+tempo.getHour()+"-"+tempo.getMinute()+"-"+tempo.getSecond();
        String nome = "jogador_"+jogador.getId()+"_"+instante+"_"+image.getOriginalFilename();
        this.fm.saveFile(image, nome);
        jogador.setPhotoPath(nome);
        return ResponseEntity.ok(jogador);
    }

    public ResponseEntity<Jogador> getJogadorById(long id){
        return ResponseEntity.ok(this.jogadorRepository.findById(id).orElseThrow());
    }

    public ResponseEntity<List<Jogador>> getAllJogador(){
        return ResponseEntity.ok(this.jogadorRepository.findAll());
    }

    public ResponseEntity<Jogador> updateJogador(Jogador jogador, long id, MultipartFile image) throws IOException {
        if(!image.isEmpty()){
            String instante = tempo.getYear()+"-"+ tempo.getMonth()+"-"+ tempo.getDayOfMonth();
            instante+="-"+tempo.getHour()+"-"+tempo.getMinute()+"-"+tempo.getSecond();
            String nome = "jogador_"+jogador.getId()+"_"+instante+"_"+image.getOriginalFilename();
            this.fm.deleteFile(jogador.getPhotoPath());
            this.fm.saveFile(image, nome);
            jogador.setPhotoPath(nome);
        }
        if(this.jogadorRepository.existsById(id)){
            return ResponseEntity.ok(this.jogadorRepository.save(jogador));
        }

        return ResponseEntity.status(401).body(null);
    }

    public void deleteJogador(long id) throws IOException {
        Jogador jogador = this.jogadorRepository.findById(id).orElseThrow();
        List<Intermediacao> intermediacoes = this.intermediacaoRepository.findAllByJogadorTransferidoEqualsIgnoreCase(jogador.getNome());
        this.fm.deleteFile(jogador.getPhotoPath());
        this.intermediacaoRepository.deleteAll(intermediacoes);
        this.jogadorRepository.deleteById(id);
    }
}
