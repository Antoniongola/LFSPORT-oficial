package com.ngola.backendlfsport.controllers;
import com.ngola.backendlfsport.services.MediaService;
import org.springframework.core.io.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/media")
@RequiredArgsConstructor
public class MediaController {
    private final MediaService mediaService;


    @GetMapping("/image/{imageName}")
    public ResponseEntity<Resource> getMedia(@PathVariable String imageName) throws IOException {
        return this.mediaService.getImage(imageName);
    }


}
