package com.spring.back_springboot.services.serviceImpl;

import com.spring.back_springboot.mapper.notesMapper;
import com.spring.back_springboot.pojo.notes;
import com.spring.back_springboot.pojo.notesCategory;
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

    @Override
    public List<notes> GetNotesByCategory(String category)
    {
        return mapper.GetNotesByCategory(category);
    }

    @Override
    public notes GetNoteById(int id)
    {
        return mapper.GetNoteById(id);
    }

    @Override
    public void addNoteVisit(int id) { mapper.addNoteVisit(id); }

    @Override
    public List<notesCategory> getAllNotesCategory()
    {
        return mapper.getAllNotesCategory();
    }
}
