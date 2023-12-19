package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.files;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface filesService
{
    List<files> getAllFiles();
    List<files> getFilesNameList();
    int AddFile(files files);
    files saveFile(MultipartFile files);
    String readMd(String direc);
    void writeMd(files files);
    files getFileById(int id);

    String getAvatarById(int id);
}
