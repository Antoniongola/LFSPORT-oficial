package com.ngola.backendlfsport.service;

import com.ngola.backendlfsport.entity.FileManager;
import com.ngola.backendlfsport.entity.Treinador;
import com.ngola.backendlfsport.repository.TreinadorRepository;
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
public class TreinadorService {
    private final TreinadorRepository treinadorRepository;
    private final FileManager fm;
    private LocalDateTime tempo = LocalDateTime.now();

    public ResponseEntity<Treinador> newTreinador(Treinador treinador, MultipartFile image) throws IOException {
        this.treinadorRepository.save(treinador);
        String instante =tempo.getDayOfMonth()+"-"+tempo.getMonth()+"-"+tempo.getYear();
        instante+="-"+tempo.getHour()+"h-"+tempo.getMinute()+"m-"+tempo.getSecond()+"s";
        String nome = "treinador_"+treinador.getId()+"_"+instante+"_"+image.getOriginalFilename();
        this.fm.saveFile(image, nome);
        treinador.setPhotoPath(nome);
        this.treinadorRepository.save(treinador);
        return ResponseEntity.ok(treinador);
    }

    public ResponseEntity<Treinador> getTreinador(long id){
        return ResponseEntity.ok(this.treinadorRepository.findById(id).orElseThrow());
    }

    public ResponseEntity<List<Treinador>> getAllTreinador(){
        return ResponseEntity.ok(this.treinadorRepository.findAll());
    }

    public ResponseEntity<Treinador> updateTreinador(Treinador treinador, long id, MultipartFile image) throws IOException {
        if(!image.isEmpty()){
            String instante =tempo.getDayOfMonth()+"-"+tempo.getMonth()+"-"+tempo.getYear();
            instante+="-"+tempo.getHour()+"h-"+tempo.getMinute()+"m-"+tempo.getSecond()+"s";
            String nome = "treinador_"+treinador.getId()+"_"+instante+"_"+image.getOriginalFilename();
            this.fm.deleteFile(treinador.getPhotoPath());
            this.fm.saveFile(image, nome);
            treinador.setPhotoPath(nome);
        }

        if(this.treinadorRepository.existsById(id)){
            return ResponseEntity.ok(this.treinadorRepository.save(treinador));
        }

        return ResponseEntity.status(401).body(null);
    }

    public void deleteTreinador(long id) throws IOException {
        Treinador treinador = this.treinadorRepository.findById(id).get();
        this.fm.deleteFile(treinador.getPhotoPath());
        this.treinadorRepository.deleteById(id);
    }


}
