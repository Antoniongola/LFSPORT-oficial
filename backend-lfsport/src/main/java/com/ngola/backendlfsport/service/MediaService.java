package com.ngola.backendlfsport.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class MediaService {
    @Value("${upload.imagem}")
    private String imagens;

    public ResponseEntity<Resource> getImage(String imageName) throws IOException {
        Path uploadPath = Paths.get(System.getProperty("user.dir"), imagens);
        Path filePath = uploadPath.resolve(imageName);
        File file = new File(filePath.toString());
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename="+imageName);
        headers.add("Content-Type", Files.probeContentType(file.toPath()));
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
        return ResponseEntity.ok().
                headers(headers).
                body(resource);
    }
}
