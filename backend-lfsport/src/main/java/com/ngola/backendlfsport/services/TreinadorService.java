package com.ngola.backendlfsport.services;

import com.ngola.backendlfsport.entities.FileManager;
import com.ngola.backendlfsport.entities.Treinador;
import com.ngola.backendlfsport.repositories.TreinadorRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.CurrentTimestamp;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Data
@RequiredArgsConstructor
public class TreinadorService {
    private final TreinadorRepository treinadorRepository;
    private final FileManager fm;
    /*
    @CurrentTimestamp
    private LocalDateTime tempo;
    */
    private LocalDateTime timestamp = LocalDateTime.now();

    public ResponseEntity<Treinador> newTreinador(Treinador treinador, MultipartFile image) throws IOException {
        this.treinadorRepository.save(treinador);
        String instante = timestamp.getYear()+"-"+ timestamp.getMonth()+"-"+ timestamp.getDayOfMonth();
        instante+="-"+timestamp.getHour()+"-"+timestamp.getMinute()+"-"+timestamp.getSecond();
        String nome = "treinador_"+treinador.getId()+"_"+instante+"_"+image.getOriginalFilename();
        this.fm.saveFile(image, nome);
        treinador.setPhotoPath(nome);

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
            String instante = timestamp.getYear()+"-"+ timestamp.getMonthValue()+"-"+ timestamp.getDayOfMonth();
            instante+="-"+timestamp.getHour()+"-"+timestamp.getMinute()+"-"+timestamp.getSecond();
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

    public void deleteTreinador(long id){
        this.treinadorRepository.deleteById(id);
    }


}
