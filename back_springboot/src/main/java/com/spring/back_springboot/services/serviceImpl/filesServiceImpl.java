package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.filesMapper;
import com.spring.back_springboot.pojo.files;
import com.spring.back_springboot.services.service.filesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class filesServiceImpl implements filesService
{
    @Autowired
    filesMapper mapper;

    @Override
    public List<files> getAllFiles()
    {
        return mapper.getAllFiles();
    }

    @Override
    public void AddFile(files files)
    {
        mapper.AddFile(files);
    }
}
