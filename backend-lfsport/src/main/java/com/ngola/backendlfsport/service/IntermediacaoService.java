package com.ngola.backendlfsport.service;

import com.ngola.backendlfsport.entity.FileManager;
import com.ngola.backendlfsport.entity.Intermediacao;
import com.ngola.backendlfsport.repository.IntermediacaoRepository;
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
public class IntermediacaoService {
    private final IntermediacaoRepository intermediacaoRepository;
    private final FileManager fm;
    private LocalDateTime tempo = LocalDateTime.now();

    public ResponseEntity<Intermediacao> newIntermediacao(Intermediacao intermediacao, MultipartFile image) throws IOException {
        this.intermediacaoRepository.save(intermediacao);
        String instante =tempo.getDayOfMonth()+"-"+tempo.getMonth()+"-"+tempo.getYear();
        instante+="-"+tempo.getHour()+"h-"+tempo.getMinute()+"m-"+tempo.getSecond()+"s";
        String nome = "intermediacao_"+intermediacao.getId()+"_"+instante+"_"+image.getOriginalFilename();
        this.fm.saveFile(image, nome);
        intermediacao.setPhotoPath(nome);
        this.intermediacaoRepository.save(intermediacao);

        return ResponseEntity.ok(intermediacao);
    }

    public ResponseEntity<Intermediacao> getIntermediacao(long id){
        return ResponseEntity.ok(this.intermediacaoRepository.findById(id).orElseThrow());
    }

    public ResponseEntity<List<Intermediacao>> getAllIntermediacao(){
        return ResponseEntity.ok(this.intermediacaoRepository.findAll());
    }

    public ResponseEntity<List<Intermediacao>> getPlayerIntermediacoes(String nome){
        return ResponseEntity.ok(this.intermediacaoRepository.findAllByJogadorTransferidoEqualsIgnoreCase(nome));
    }

    public ResponseEntity<Intermediacao> updateIntermediacao(Intermediacao intermediacao,
                                                             long id,
                                                             MultipartFile image) throws IOException {
        if(!image.isEmpty()){
            String instante =tempo.getDayOfMonth()+"-"+tempo.getMonth()+"-"+tempo.getYear();
            instante+="-"+tempo.getHour()+"h-"+tempo.getMinute()+"m-"+tempo.getSecond()+"s";
            String nome = "intermediacao_"+intermediacao.getId()+"_"+instante+"_"+image.getOriginalFilename();
            this.fm.deleteFile(intermediacao.getPhotoPath());
            this.fm.saveFile(image, nome);
            intermediacao.setPhotoPath(nome);
        }

        if(this.intermediacaoRepository.existsById(id)){
            return ResponseEntity.ok(this.intermediacaoRepository.save(intermediacao));
        }

        return ResponseEntity.status(401).body(null);
    }

    public void deleteIntermediacao(long id) throws IOException {
        Intermediacao intermediacao = this.intermediacaoRepository.findById(id).get();
        this.fm.deleteFile(intermediacao.getPhotoPath());
        this.intermediacaoRepository.deleteById(id);
    }
}
