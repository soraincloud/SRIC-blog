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
    public List<notes> getAllNotes()
    {
        return mapper.getAllNotes();
    }

    @Override
    public List<notes> getNotesByCategory(String category)
    {
        return mapper.getNotesByCategory(category);
    }

    @Override
    public notes getNoteById(int id)
    {
        return mapper.getNoteById(id);
    }

    @Override
    public void addNoteVisit(int id) { mapper.addNoteVisit(id); }

    @Override
    public List<notesCategory> getAllNotesCategory()
    {
        return mapper.getAllNotesCategory();
    }

    @Override
    public void addNotesCategory(notesCategory category)
    {
        mapper.addNotesCategory(category);
    }

    @Override
    public void updateNotesCategoryById(notesCategory category)
    {
        mapper.updateNotesCategoryById(category);
    }

    @Override
    public void deleteNotesCategoryById(int id)
    {
        mapper.deleteNotesCategoryById(id);
    }
}
