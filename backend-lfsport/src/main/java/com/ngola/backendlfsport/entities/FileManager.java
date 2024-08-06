package com.ngola.backendlfsport.entities;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Component
public class FileManager {
    @Value("${upload.imagem}")
    String imagens;

    public void saveFile(MultipartFile file, String filename) throws IOException {
        // Resolve the relative path to an absolute path
        Path uploadPath = Path.of(System.getProperty("user.dir"), imagens);

        // Log the upload path
        System.out.println("Upload path: " + uploadPath.toAbsolutePath());

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        Path filePath = uploadPath.resolve(filename);
        file.transferTo(filePath.toFile());
    }

    public void deleteFile(String filename) {

    }
}
