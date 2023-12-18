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
        files files = service.saveFile(file);
        service.AddFile(files);
    }

    @GetMapping("/getMd")
    public String getMd(int fid)
    {
        String dir = service.getFileById(fid).getFile();
        return service.readMd(dir);
    }

    @PostMapping("/setMd")
    public void setMd(@RequestBody files files)
    {
        files file = service.getFileById(files.getId());
        file.setMarkdownText(files.getMarkdownText());
        service.writeMd(file);
    }

    @GetMapping("/getNameById")
    public String getNameById(int fid)
    {
        return service.getFileById(fid).getName();
    }
}
