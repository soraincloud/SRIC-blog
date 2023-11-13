package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.notes;
import com.spring.back_springboot.pojo.notesCategory;
import com.spring.back_springboot.services.service.notesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")//此Controller中所有api前缀路径为/api
public class notesController
{
    @Autowired
    notesService service;

    @CrossOrigin
    @GetMapping("/notes/getNotesList")
    public List<notes> GetAllNotes()
    {
        return service.GetAllNotes();
    }

    @CrossOrigin
    @GetMapping("/notes/getNoteListByCategory")
    public List<notes> GetNotesByCategory(String category) throws Exception
    {
        return service.GetNotesByCategory(category);
    }

    @CrossOrigin
    @GetMapping("/notes/getNoteById")
    public notes GetNoteById(int id)
    {
        service.addNoteVisit(id);
        return service.GetNoteById(id);
    }

    @CrossOrigin
    @GetMapping("/notes/getAllNotesCategory")
    public List<notesCategory> getAllNotesCategory()
    {
        return service.getAllNotesCategory();
    }
}
