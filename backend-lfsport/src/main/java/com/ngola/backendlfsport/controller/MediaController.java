package com.ngola.backendlfsport.controller;
import com.ngola.backendlfsport.service.MediaService;
import org.springframework.core.io.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

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
