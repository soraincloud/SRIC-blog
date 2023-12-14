package com.spring.back_springboot.services.service;

import com.spring.back_springboot.pojo.files;

import java.util.List;

public interface filesService
{
    List<files> getAllFiles();
    void AddFile(files files);
}
