package com.spring.back_springboot.controller;

import com.spring.back_springboot.pojo.notes;
import com.spring.back_springboot.pojo.notesCategory;
import com.spring.back_springboot.services.service.notesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/notes")//此Controller中所有api前缀路径为/api
public class notesController
{
    @Autowired
    notesService service;

    @GetMapping("/getNotesList")
    public List<notes> getAllNotes()
    {
        return service.getAllNotes();
    }

    @GetMapping("/getNoteListByCategory")
    public List<notes> getNotesByCategory(String category) throws Exception
    {
        return service.getNotesByCategory(category);
    }

    @GetMapping("/getNoteById")
    public notes getNoteById(int id)
    {
        service.addNoteVisit(id);
        return service.getNoteById(id);
    }

    @GetMapping("/getNotesByText")
    public List<notes> getNotesByText(String text)
    {
        return service.getNotesByText(text);
    }

    @PostMapping("/addNote")
    public void addNote(@RequestBody notes note)
    {
        service.addNote(note);
    }

    @PostMapping("/updateNote")
    public void updateNote(@RequestBody notes note)
    {
        service.updateNote(note);
    }

    @PostMapping("/deleteNoteById")
    public void deleteNoteById(@RequestBody notes note)
    {
        service.deleteNoteById(note.getId());
    }

    @GetMapping("/getAllNotesCategory")
    public List<notesCategory> getAllNotesCategory()
    {
        return service.getAllNotesCategory();
    }

    @PostMapping("/addNotesCategory")
    public void addNotesCategory(@RequestBody notesCategory category)
    {
        service.addNotesCategory(category);
    }

    @PostMapping("/updateNotesCategoryById")
    public void updateNotesCategoryById(@RequestBody notesCategory category)
    {
        service.updateNotesCategoryById(category);
    }

    @PostMapping("/deleteNotesCategoryById")
    public void deleteNotesCategoryById(@RequestBody notesCategory category)
    {
        service.deleteNotesCategoryById(category.getId());
    }
}
