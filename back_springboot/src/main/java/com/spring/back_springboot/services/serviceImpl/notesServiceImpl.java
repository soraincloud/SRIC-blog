package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.notesMapper;
import com.spring.back_springboot.pojo.notes;
import com.spring.back_springboot.services.service.notesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class notesServiceImpl implements notesService
{
    @Autowired
    notesMapper mapper;

    @Override
    public List<notes> GetAllNotes()
    {
        return mapper.GetAllNotes();
    }
}
