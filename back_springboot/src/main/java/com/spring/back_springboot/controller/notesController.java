package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.notes;
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
    @GetMapping("/notesList")
    public List<notes> GetAllNotes()
    {
        return service.GetAllNotes();
    }

    @CrossOrigin
    @GetMapping("/notesListByCategory")
    public List<notes> GetNotesByCategory(String category) throws Exception
    {
        return service.GetNotesByCategory(category);
    }

    @CrossOrigin
    @GetMapping("/getNoteById")
    public notes GetNoteById(int id)
    {
        return service.GetNoteById(id);
    }
}
