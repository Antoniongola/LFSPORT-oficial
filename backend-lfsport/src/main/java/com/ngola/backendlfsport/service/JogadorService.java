package com.ngola.backendlfsport.service;

import com.ngola.backendlfsport.entity.FileManager;
import com.ngola.backendlfsport.entity.Intermediacao;
import com.ngola.backendlfsport.entity.Jogador;
import com.ngola.backendlfsport.repository.IntermediacaoRepository;
import com.ngola.backendlfsport.repository.JogadorRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
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
        String instante =tempo.getDayOfMonth()+"-"+tempo.getMonth()+"-"+tempo.getYear();
        instante+="-"+tempo.getHour()+"h-"+tempo.getMinute()+"m-"+tempo.getSecond()+"s";
        String nome = "jogador_"+jogador.getId()+"_"+instante+"_"+image.getOriginalFilename();
        this.fm.saveFile(image, nome);
        jogador.setPhotoPath(nome);
        this.jogadorRepository.save(jogador);
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
            tempo = LocalDateTime.now();
            String instante =tempo.getDayOfMonth()+"-"+tempo.getMonth()+"-"+tempo.getYear();
            instante+="-"+tempo.getHour()+"h-"+tempo.getMinute()+"m-"+tempo.getSecond()+"s";
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
        tempo = LocalDateTime.now();
        Jogador jogador = this.jogadorRepository.findById(id).orElseThrow();
        List<Intermediacao> intermediacoes = this.intermediacaoRepository.findAllByJogadorTransferidoEqualsIgnoreCase(jogador.getNome());
        this.fm.deleteFile(jogador.getPhotoPath());
        for(Intermediacao intermediacao : intermediacoes){
            this.fm.deleteFile(intermediacao.getPhotoPath());
            this.intermediacaoRepository.deleteById(intermediacao.getId());
        }

        this.jogadorRepository.deleteById(id);
    }
}
