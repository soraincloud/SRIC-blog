package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.files;
import com.spring.back_springboot.services.service.filesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/files")//此Controller中所有api前缀路径为/api
public class filesController
{
    @Autowired
    filesService service;

    @GetMapping("/getAllFiles")
    public List<files> getAllFiles()
    {
        return service.getAllFiles();
    }

    @PostMapping("/addFile")
    public void addFile(@RequestParam MultipartFile file)
    {
        String dir = System.getProperty("user.dir");
        dir += "\\files";
        File saveDir = new File(dir);
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(saveDir + "/" + file.getOriginalFilename());
            fileOutputStream.write(file.getBytes());
            fileOutputStream.flush();
            fileOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
